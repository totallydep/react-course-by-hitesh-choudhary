import Button from "../Buttons/Button";

Button;
const Contact = () => {
  return (
    <div className="flex flex-col items-center my-16">
      <div className="flex justify-center items-center gap-16 mb-8">
        <div>
          <img
            className="w-[300px] rounded-full"
            src="https://e1.pxfuel.com/desktop-wallpaper/885/825/desktop-wallpaper-open-me-levi-ackerman-aot-pfp.jpg"
            alt="levi eating"
          />
        </div>
        <form className="flex flex-col gap-8">
          <input
            className="p-4 rounded focus:outline-none focus:bg-yellow-100 text-black"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="p-4 rounded focus:outline-none focus:bg-yellow-100 text-black"
            type="email"
            placeholder="Email"
          />
          <Button handleClick={() => console.log(333)} btnText="Subscribe" />
        </form>
      </div>
      <p className="text-justify w-[65ch]">
        Email newsletters can include a weekly round-up of blog posts, case
        studies regarding your product or service, upcoming company events and
        webinars, or even a behind-the-scenes look at your company. Of course,
        you don't want to create a newsletter just to create one — instead, you
        should thoroughly research what your audience might prefer and what your
        company is well-suited to offer. You're in luck if you're looking for
        general email newsletter inspiration.
      </p>
    </div>
  );
};

export default Contact;
