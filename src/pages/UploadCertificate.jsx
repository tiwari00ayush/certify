import React, { useState } from "react";
import { CustomButton, FormField, Loader } from "../components";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import FormData from "form-data";
import { useStateContext } from "../context";
import Irys from "@irys/sdk";
const UploadCertificate = () => {
  const navigate = useNavigate();

  const JWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0MDJlMjExNC00NTMwLTRlMDYtODlkMy1hMGVmMzc1NzIxZDIiLCJlbWFpbCI6ImFyanVub21yYXlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjkzZWM2ZTUzZDRhODM1NWY4MjU5Iiwic2NvcGVkS2V5U2VjcmV0IjoiZmMxNzY4OTU1N2VjZWJjMTg3ZjcwNzczMjRkNTIyZmVmMWVjNzJhNWRhNjQ2YjdiM2IyNmEyY2EwYWE1ZTc4NSIsImlhdCI6MTY5NTEwMTkyOX0.zW1hN_0tn1prI-y4quZs-xGXo8vkeoyVasMEOj04jGU";
  const isLoading = false;
  const { publishCampaign } = useStateContext();
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    duration: "",
    deadline: 1,
    imageIpfs: "",
  });

  let image;
  // arweave
  const getIrys = async () => {
    const url = "https://devnet.irys.xyz";
    const providerUrl = "https://rpc-mumbai.maticvigil.com/";
    const token = "matic";

    const irys = new Irys({
      url, // URL of the node you want to connect to
      token, // Token used for payment
      key: 0x7543e79fbc62e0312f93811045773a8344c61cdc, // ETH or SOL private key
      config: { providerUrl }, // Optional provider URL, only required when using Devnet
    });
    console.log(irys);
    return irys;
  };
  const fundNode = async () => {
    const irys = await getIrys();
    try {
      const fundTx = await irys.fund(irys.utils.toAtomic(0.05));
      console.log(
        `Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${
          irys.token
        }`
      );
    } catch (e) {
      console.log("Error uploading data ", e);
    }
  };
  const uploadFile = async (e) => {
    const irys = await getIrys();
    await fundNode();
    // Your file
    image = e.target.files[0];
    const fileToUpload = image;

    const tags = [{ name: "application-id", value: "MyNFTDrop" }];

    try {
      const receipt = await irys.uploadFile(fileToUpload, { tags });
      console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    } catch (e) {
      console.log("Error uploading file ", e);
    }
  };
  const imageUploaded = async (e) => {
    image = e.target.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("file", image);
    const headers = {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      Authorization: `Bearer ${JWT}`,
    };
    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers,
        }
      );
      console.log(res.data);
      handleFormFieldChange("imageIpfs", res.data.IpfsHash);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormFieldChange = (fieldName, e) => {
    if (fieldName === "imageIpfs") {
      setForm({ ...form, [fieldName]: e });
    } else {
      setForm({ ...form, [fieldName]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ ...form });
    await publishCampaign({ ...form });
    navigate("/");
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Create Campaign
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Title *"
            placeholder="Goa Beach cleaning"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />

          <FormField
            labelName="location *"
            placeholder="Goa"
            inputType="text"
            value={form.location}
            handleChange={(e) => handleFormFieldChange("location", e)}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Description *"
            placeholder="Requirement of volunteers, etc."
            inputType="text"
            value={form.description}
            handleChange={(e) => handleFormFieldChange("description", e)}
          />
        </div>

        <FormField
          labelName="date *"
          placeholder=""
          inputType="date"
          value={form.date}
          handleChange={(e) => handleFormFieldChange("date", e)}
        />

        <FormField
          labelName="duration *"
          placeholder="in hours e.g 5"
          inputType="number"
          value={form.duration}
          handleChange={(e) => handleFormFieldChange("duration", e)}
        />
        <FormField
          labelName="deadline *"
          placeholder=""
          inputType="number"
          value={form.deadline}
          handleChange={(e) => handleFormFieldChange("deadline", e)}
        />
        <FormField
          labelName="Image *"
          placeholder="cover image"
          inputType="file"
          value={image}
          handleChange={(e) => imageUploaded(e)}
        />
        <FormField
          labelName="imageIpfs *"
          placeholder=""
          inputType="text"
          value={form.imageIpfs}
          readOnly={true}
          handleChange={(e) => handleFormFieldChange("imageIpfs", e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="upload"
            title="Create Campaign"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default UploadCertificate;
