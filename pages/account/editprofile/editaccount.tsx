import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/btn";
import "../../../styles/twclass.css";
import ReactLoading from "react-loading";
import { toast, Toaster } from "react-hot-toast";

export function UpdateUser() {
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState({
    user_id: "",
    name: "",
    username: "",
    phone: "",
    address: "",
    email: "",
    birth: "",
    password: "",
    profile_picture: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8000/api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Log the fetched user data
          setUserData(data);
        });
    }
  }, []);

  const [image, setImage] = useState(null); // To store the selected image
  const [imagePreview, setImagePreview] = useState(""); // To display the preview of the selected image
  const [formData, setFormData] = useState(new FormData());

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      // Set the selected image and preview
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);

      // Update FormData with the new file
      formData.set("profile_picture", file);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    let updatedValue = value;
    if (name === "birth") {
      // Create a new Date object
      const date = new Date(value);

      // Format the date to YYYY-MM-DD
      updatedValue = date.toISOString().split("T")[0];
    }

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: updatedValue,
    }));

    // Update FormData with the new value
    formData.set(name, updatedValue);
  };

  async function editUser(e: React.FormEvent) {
    e.preventDefault(); // Prevent the default form submission behavior

    setIsLoading(true); // Start loading

    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch("http://localhost:8000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserData(data);

        // ... rest of your code

        const result = await fetch(
          `http://localhost:8000/api/updateuser/${userData.user_id}?_method=PUT`,
          {
            method: "POST",
            body: formData,
          } as RequestInit,
        );

        const resultData = await result.json(); // Get the JSON data from the result

        if (result.ok) {
          toast.success(resultData.message); // Use resultData.message for the toast message
        } else {
          toast.error(resultData.message); // Use resultData.message for the toast message
        }
      }
    } catch (error) {
      console.error("Error updating User:", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // If the error object has a response and a data property, display the message from the data property
        toast.error(error.response.data.message);
      } else {
        // If the error object doesn't have a response or a data property, display a generic error message
        toast.error("An error occurred while updating the user");
      }
    } finally {
      setIsLoading(false); // End loading
    }
  }

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center 2xl:h-screen bg-[#0a0a0a] w-full">
        <form
          className="bg-transparent rounded px-8 pt-6 pb-8 mb-4 text-white"
          onSubmit={editUser}
        >
          <p className="block mb-4 text-6xl font-bold flex justify-center items-center">
            Account Center
          </p>
          <div className="flex space-x-10 w-full bg-gray-900 bg-opacity-60 p-10">
            <div className="mb-4 flex flex-col p-4 rounded-xl w-2/3">
              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Full Name:
                </label>
                <input
                  id="name"
                  name="name"
                  defaultValue={userData.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter New Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Username:
                </label>
                <input
                  id="username"
                  name="username"
                  defaultValue={userData.username}
                  onChange={handleInputChange}
                  className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter New Username"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Password:
                </label>
                <input
                  id="pasus"
                  name="password"
                  onChange={handleInputChange}
                  className="shadow appearance-none bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Enter New Password"
                />
              </div>

              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleInputChange}
                  className="shadow appearance-none bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="mb-4 flex flex-col p-4 rounded-xl w-2/3">
              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Phone Number:
                </label>
                <input
                  id="phone"
                  name="phone"
                  defaultValue={userData.phone}
                  onChange={handleInputChange}
                  className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter New Phone Number"
                />
              </div>

              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Address:
                </label>
                <input
                  id="address"
                  name="address"
                  defaultValue={userData.address}
                  onChange={handleInputChange}
                  className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter New Address"
                />
              </div>

              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Email address:
                </label>
                <input
                  id="email"
                  name="email"
                  defaultValue={userData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Enter New Email"
                />
              </div>

              <div className="mb-4">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Birth Date:
                </label>
                <input
                  id="birth"
                  name="birth"
                  defaultValue={userData.birth}
                  onChange={handleInputChange}
                  className="shadow appearance-none  bg-transparent border border-gray-400 text-xl rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  placeholder="Enter New Name"
                />
              </div>
            </div>

            <div className="mb-4  flex flex-col p-4 rounded-xl w-2/3">
              <div className="mb-6">
                <label
                  style={{
                    filter: "drop-shadow(2px 2px 2px rgba(180, 180, 180, 0.7))",
                  }}
                  className="block mb-2 text-xl font-bold text-slate-200 "
                >
                  Profile Picture:
                </label>
                <div className="label">
                  <span className="label-text">
                    Please select an Image to upload.
                  </span>
                </div>
                <input
                  id="userpfp"
                  className="file-input hover:bg-gray-800 transition-all w-full bg-gray-900"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {imagePreview && (
                  <Image
                    width={500}
                    height={500}
                    src={imagePreview}
                    alt="Preview"
                    className="mt-4 rounded-lg shadow-md  mx-auto  hover:scale-105 transition-all"
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="btnBack bg-"
              href="/account/profile"
            >
              Back
            </Button>
            <Button type="submit" className="btnPrimary">
              {isLoading ? (
                <ReactLoading
                  type={"spin"}
                  className="mx-auto"
                  color={"#ffffff"}
                  height={20}
                  width={20}
                />
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateUser;
