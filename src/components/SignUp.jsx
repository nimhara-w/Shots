const SignUp = () => {
  return (
    <div className="bg-black md:px-20 px-5 py-16">
      <h2 className="text-4xl text-gradient font-base text-center mb-5">
        Sign Up For Our Mailing List
      </h2>
      <div className="max-w-md mx-auto">
        <p className="text-white text-center font-thin mb-10">
          Be the first to know about our latest brews, exclusive offers, and
          upcoming events.
        </p>
      </div>
      <div className="max-w-md mx-auto flex flex-col gap-1.5">
        <label className="text-sm font-medium text-gray-400" for="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full px-3.5 py-2.5 text-sm rounded-lg
                     bg-white/5 border border-white/10 text-white placeholder-white/30
                     focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30
                     transition"
        />
        <p className="text-xs text-white/40">We'll never share your email.</p>
        <button
          className="mt-3 mb-20 w-full py-2.5 text-sm font-medium rounded-lg
                           bg-white text-black hover:bg-soft active:scale-[0.98] transition"
        >
          Get started →
        </button>
      </div>
    </div>
  );
};

export default SignUp;
