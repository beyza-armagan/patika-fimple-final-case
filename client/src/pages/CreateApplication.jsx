import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { applicationForm } from "../utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

const resolver = yupResolver(applicationForm);

export default function CreateApplication() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver });

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Ad</FormLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    id="name"
                    placeholder="Lütfen adınızı girin"
                  />
                )}
              />
              {errors.name && (
                <Box color="red.500" textAlign="right">
                  {errors.name.message}
                </Box>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isInvalid={!!errors.surname}>
              <FormLabel htmlFor="surname">Soyad</FormLabel>
              <Controller
                name="surname"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="surname"
                    type="text"
                    placeholder="Lütfen soyadınızı girin"
                  />
                )}
              />
              {errors.surname && (
                <Box color="red.500" textAlign="right">
                  {errors.surname.message}
                </Box>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isInvalid={!!errors.age}>
              <FormLabel htmlFor="age">Yaş</FormLabel>
              <Controller
                name="age"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="age"
                    type="text"
                    placeholder="Lütfen yaşınızı girin"
                  />
                )}
              />
              {errors.age && (
                <Box color="red.500" textAlign="right">
                  {errors.age.message}
                </Box>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl isInvalid={!!errors.tc}>
              <FormLabel htmlFor="tc">TC</FormLabel>
              <Controller
                name="tc"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="tc"
                    type="text"
                    placeholder="Lütfen TC numarası girin"
                  />
                )}
              />
              {errors.tc && (
                <Box color="red.500" textAlign="right">
                  {errors.tc.message}
                </Box>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.applicationReason}>
              <FormLabel htmlFor="applicationReason">Başvuru Nedeni</FormLabel>
              <Controller
                name="applicationReason"
                control={control}
                render={({ field }) => (
                  <>
                    <Textarea
                      {...field}
                      id="applicationReason"
                      placeholder="Lütfen başvuru nedeninizi yazın"
                    />
                    {errors.applicationReason && (
                      <Box color="red.500" textAlign="right">
                        {errors.applicationReason.message}
                      </Box>
                    )}
                  </>
                )}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.address}>
              <FormLabel htmlFor="address">Adres Bilgisi</FormLabel>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id="address"
                    placeholder="Lütfen adresinizi yazın"
                  />
                )}
              />
              {errors.address && (
                <Box color="red.500" textAlign="right">
                  {errors.address.message}
                </Box>
              )}
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.additionalInfo}>
              <FormLabel htmlFor="additionalInfo">Fotoğraflar/Ekler</FormLabel>
              <Controller
                name="additionalInfo"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    id="additionalInfo"
                    placeholder="Lütfen eklemek istediklerinizi yazınız"
                  />
                )}
              />
              {errors.additionalInfo && (
                <Box color="red.500" textAlign="right">
                  {errors.additionalInfo.message}
                </Box>
              )}
            </FormControl>
          </GridItem>
        </Grid>

        <Button type="submit" colorScheme="blue" mt={4}>
          Gönder
        </Button>
      </form>
    </Box>
  );
}
