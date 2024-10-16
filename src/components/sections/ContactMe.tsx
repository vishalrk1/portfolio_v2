import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactSection = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID as string;
  const templateId = import.meta.env.VITE_TEMPLATE_ID as string;
  const publicId = import.meta.env.VITE_PUBLIC_ID as string;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Fill all the fields 😢");
      setLoading(false);
      return;
    }
    emailjs.send(serviceId, templateId, formData, publicId).then(
      (_) => {
        toast.success("Message sent successfully 😎");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      },
      (error) => {
        toast.error("Message not sent, please try again 😔😓");
        setLoading(false);
        console.log(error);
      }
    );
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center w-full px-6 md:px-12 xl:px-40 pb-10"
    >
      <h1
        data-aos="fade-in"
        className="mb-10 text-white text-3xl text-center font-bold"
      >
        CONTACT ME
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        <p className="text-neutral-400 text-sm md:text-lg m-2 w-full lg:w-1/2">
          Hey, if you like my profile and want to connect with me, please drop a
          message. I will get back to you. Let's build something crazy!
        </p>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-base text-neutral-300 placeholder:text-neutral-500 p-4 py-6 rounded-lg border-1 bg-neutral-900"
          />
          <Input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="text-neutral-300 placeholder:text-neutral-500 w-full p-4 py-6 rounded-lg border-1 bg-neutral-900"
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message here...."
            className="w-full text-neutral-300 placeholder:text-neutral-500 resize-none h-52 p-4 py-6 rounded-lg border-1 bg-neutral-900"
          />
          <Button
            className="bg-white text-black my-2 w-max"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
