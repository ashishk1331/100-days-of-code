import * as Yup from "yup";

export const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, {
      excludeEmptyString: true,
      message: "Invalid email",
    })
    .required("Required"),
});
