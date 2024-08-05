import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/done.json";
import message from "../../../public/message.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzgwvrz");
  if (state.succeeded) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Thanks for send email!</h1>
        <Lottie
          style={{ height: "85px" }}
          loop={false}
          animationData={doneAnimation}
        />
      </div>
    );
  }
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope-o"></span>
        Contact us
      </h1>
      <p className="subtitle">
        Contact us for more information and Get notified when publish something
        new
      </p>

      <div className="test">
        <form onSubmit={handleSubmit}>
          <div className="flex" style={{ display: "flex" }}>
            <label htmlFor="email">Email Address :</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px", display: "flex" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            className="send-btn"
            type="submit"
            disabled={state.submitting}
          >
            {" "}
            {state.submitting ? "Sending..." : "Send"}{" "}
          </button>
        </form>
        <div className="animation">
        <Lottie
        className="contact-animation"
          style={{ height: "350px" }}
          animationData={message}
        />
        </div>
      </div>
    </section>
  );
};

export default Contact;
