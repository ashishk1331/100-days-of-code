"use client";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useFormik } from "formik";
import { SubscribeSchema } from "./Subscribe.schema.js";
import { motion, AnimatePresence } from "framer-motion";
import { addBetaUser } from "@/appwrite/init.js";
import { useBetaUserStore } from "@/stores/useBetaUser.store.js";

export default function (props) {
  const [signUp, setSignUp] = useState(false);

  return (
    <div
      className="max-w-6xl min-h-screen py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto flex"
      id="subscribe"
    >
      <div className="max-w-xl text-center m-auto">
        <div className="mb-5">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
            Sign up to our newsletter
          </h2>
        </div>
        <AnimatePresence>
          {signUp ? <CheckedIn /> : <Form setSignUp={setSignUp} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Form(props) {
  const { setSignUp } = props;
  const emails = useBetaUserStore((state) => state.emails);
  const addEmail = useBetaUserStore((state) => state.addEmail);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SubscribeSchema,
    onSubmit: async (values, actions) => {
      await addBetaUser(values);
      setSignUp(true);
      addEmail(values.email);

      actions.resetForm();
    },
  });

  return (
    <>
      <motion.form
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
      >
        <div className="w-full sm:max-w-lg md:ms-auto">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Subscribe
            </button>
          </div>
          {errors.email && touched.email && (
            <p className="mt-3 text-sm text-red-500">{errors.email}</p>
          )}
          <p className="mt-3 text-sm text-gray-500">
            Be one of the first to know when we launch.
          </p>
        </div>
      </motion.form>
      {emails.length > 0 && (
        <p className="mt-3 text-sm text-gray-500">
          Here are all the emails you've signed up with,
          {new Array(emails).map((email) => (
            <span key={email} className="text-blue-600 font-semibold">
              {email}
            </span>
          ))}
        </p>
      )}
    </>
  );
}

function CheckedIn(props) {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2 w-fit mx-auto"
    >
      <CheckBadgeIcon className="h-6 w-6 text-blue-600" />
      <span className="text-md text-gray-700">You're all set now.</span>
    </motion.div>
  );
}
