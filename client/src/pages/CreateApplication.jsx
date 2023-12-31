import { useForm, Controller } from "react-hook-form";
import { applicationForm } from "../utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const resolver = yupResolver(applicationForm);

export default function CreateApplication() {
  const navigate = useNavigate();

  const { setData } = useData();
  const [file, setFile] = useState("");
  const defaultValues = {
    //default values for ticket creation
    name: "John",
    surname: "Doe",
    age: 25,
    tc: "12345678901",
    applicationReason: "Lorem ipsum dolor sit amet...",
    address: "123 Main St, City",
    file: "",
    // additionalInfo: "",
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({ resolver, defaultValues });

  const handleFormSubmit = async (formData) => {
    console.log("form data");
    console.log(formData);
    setData({ ...formData });
    navigate("/basvuru-basarili", { state: { formData, file } });
  };

  const getBase64 = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      setFile(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <div className="mx-auto max-w-md p-4 border-1 border-solid border-gray-300 rounded-md shadow-md">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`mb-4 ${errors.name ? "text-red-500 text-center" : ""}`}
          >
            <label htmlFor="name" className="block font-bold">
              Ad
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="name"
                  placeholder="Lütfen adınızı girin"
                  value={field.value || ""}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.name && <div>{errors.name.message}</div>}
          </div>
          <div
            className={`mb-4 ${
              errors.surname ? "text-red-500 text-right" : ""
            }`}
          >
            <label htmlFor="surname" className="block font-bold">
              Soyad
            </label>
            <Controller
              name="surname"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="surname"
                  type="text"
                  placeholder="Lütfen soyadınızı girin"
                  value={field.value || ""}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.surname && (
              <div className="text-red-500 text-right">
                {errors.surname.message}
              </div>
            )}
          </div>

          <div
            className={`col-span-1 ${
              errors.age ? "text-red-500 text-right" : ""
            }`}
          >
            <label htmlFor="age" className="block font-bold">
              Yaş
            </label>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="age"
                  type="text"
                  placeholder="Lütfen yaşınızı girin"
                  value={field.value || ""}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.age && (
              <div className="text-red-500 text-right">
                {errors.age.message}
              </div>
            )}
          </div>

          <div className="col-span-1">
            <div
              className={`mb-4 ${errors.tc ? "text-red-500 text-right" : ""}`}
            >
              <label htmlFor="tc" className="block font-bold">
                TC
              </label>
              <Controller
                name="tc"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="tc"
                    type="text"
                    placeholder="Lütfen TC numarası girin"
                    value={field.value || ""}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                )}
              />
              {errors.tc && <div>{errors.tc.message}</div>}
            </div>
          </div>

          <div className="col-span-2">
            <div
              className={`mb-4 ${
                errors.applicationReason ? "text-red-500 text-right" : ""
              }`}
            >
              <label htmlFor="applicationReason" className="block font-bold">
                Başvuru Nedeni
              </label>
              <Controller
                name="applicationReason"
                control={control}
                render={({ field }) => (
                  <>
                    <textarea
                      {...field}
                      id="applicationReason"
                      placeholder="Lütfen başvuru nedeninizi yazın"
                      value={field.value || ""}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.applicationReason && (
                      <div>{errors.applicationReason.message}</div>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          <div
            className={`col-span-2 ${
              errors.address ? "text-red-500 text-right" : ""
            }`}
          >
            <label htmlFor="address" className="block font-bold">
              Adres Bilgisi
            </label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="address"
                  placeholder="Lütfen adresinizi yazın"
                  value={field.value || ""}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
            />
            {errors.address && (
              <div className="text-red-500 text-right">
                {errors.address.message}
              </div>
            )}
          </div>

          <div className="col-span-2">
            <div
              className={`mb-4 ${
                errors.additionalInfo ? "text-red-500 text-right" : ""
              } flex items-center justify-center w-full`}
            >
              <label htmlFor="additionalInfo" className="block font-bold">
                Fotoğraflar/Ekler
              </label>

              <input
                {...register("file")}
                type="file"
                name="file"
                id="file"
                onChange={(event) => {
                  // setData({ ...data, file: event.target.files[0] });
                  getBase64(event.target.files[0]);
                  // console.log(event.target.files[0]);
                  // onChange(event.target.files[0]);
                }}
                placeholder="Lütfen fotoğraflar/ekler bilgisi girin"
                // className="hidden"
              />

              {errors.additionalInfo && (
                <div>{errors.additionalInfo.message}</div>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
