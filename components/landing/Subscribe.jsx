"use client";
import {
  CheckBadgeIcon,
  HandRaisedIcon,
  CalendarDaysIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { SubscribeSchema } from "./Subscribe.schema.js";
import { motion, AnimatePresence } from "framer-motion";
import { addBetaUser, getHeadCount } from "@/appwrite/init.js";
import { useBetaUserStore } from "@/stores/useBetaUser.store.js";

const features = [
  {
    name: "No Spam",
    description: "Not at all. I only write when I have something to say.",
    icon: HandRaisedIcon,
  },
  {
    name: "Weekly Updates",
    description: "Swear I'll keep you updated. Haha!",
    icon: CalendarDaysIcon,
  },
];

export default function (props) {
  const [signUp, setSignUp] = useState(false);
  const [headCount, setHeadCount] = useState(0);

  useEffect(() => {
    const fetchHeadCount = async () => {
      const count = await getHeadCount();
      setHeadCount(count);
    };

    fetchHeadCount();
  }, []);

  return (
    <div
      className="max-w-6xl min-h-screen py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto flex"
      id="subscribe"
    >
      <div className="w-fit text-center m-auto">
        <div className="mb-5">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
            Sign up to our newsletter
          </h2>
        </div>
        <AnimatePresence>
          {signUp ? <CheckedIn /> : <Form setSignUp={setSignUp} />}
        </AnimatePresence>
        {headCount > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            <mark className="bg-emerald-400">{headCount} people</mark> have already signed up.
          </p>
        )}

        <dl className="mt-24 max-w-xl flex flex-col space-y-6 justify-around text-base leading-7 text-gray-600 lg:max-w-none text-left">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-emerald-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
              <br />
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
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
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
            <span key={email} className="text-emerald-600 font-semibold">
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
      <CheckBadgeIcon className="h-6 w-6 text-emerald-600" />
      <span className="text-md text-gray-700">You're all set now.</span>
    </motion.div>
  );
}
