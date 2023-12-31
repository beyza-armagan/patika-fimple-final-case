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
    name: "",
    surname: "",
    age: "",
    tc: "",
    applicationReason: "",
    address: "",
    file: "",
    date: "",
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({ resolver, defaultValues });

  const handleFormSubmit = async (formData) => {
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString();

    formData.date = formattedDate;

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
      <h1 className="text-2xl font-bold mb-6">Başvuru Formu</h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div>
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
            {errors.name && (
              <div className="text-red-500 text-center">
                {errors.name.message}
              </div>
            )}
          </div>

          <div>
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
              <div className="text-red-500 text-center">
                {errors.surname.message}
              </div>
            )}
          </div>

          <div>
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
              <div className="text-red-500 text-center">
                {errors.age.message}
              </div>
            )}
          </div>

          <div>
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
            {errors.tc && (
              <div className="text-red-500 text-center">
                {errors.tc.message}
              </div>
            )}
          </div>

          <div className="col-span-2">
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
                    <div className="text-red-500 text-center">
                      {errors.applicationReason.message}
                    </div>
                  )}
                </>
              )}
            />
          </div>

          <div className="col-span-2">
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
              <div className="text-red-500 text-center">
                {errors.address.message}
              </div>
            )}
          </div>

          <div className="col-span-2">
            <label htmlFor="file" className="block font-bold mb-2">
              Fotoğraflar:
            </label>
            <div className="mx-auto max-w-[400px]">
              <input
                {...register("file")}
                className="block w-full text-sm text-slate-500
                           file:mr-4 file:py-2 file:px-4 file:rounded-md
                           file:border-0 file:text-sm file:font-semibold
                           file:bg-[#dbeafe] file:text-blue-700
                           hover:file:bg-blue-400 "
                type="file"
                name="file"
                id="file"
                onChange={(event) => {
                  getBase64(event.target.files[0]);
                }}
              />
            </div>
            <p
              className="mt-4 mb-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG or JPG (MAX. 800x400px, 10MB).
            </p>
            {errors.file && (
              <div className="text-red-500">{errors.file.message}</div>
            )}
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
