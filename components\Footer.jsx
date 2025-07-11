function Footer() {
  return (
    <div className="bg-gray-200 h-screen p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      <p>Stay updated with the latest news and updates from Pakistan Tourism.</p>
      <div className="flex justify-center">
        <a href="#" className="text-orange-500 hover:text-orange-700">
          <i className="fab fa-facebook-f text-2xl" />
        </a>
        <a href="#" className="text-orange-500 hover:text-orange-700">
          <i className="fab fa-twitter text-2xl" />
        </a>
        <a href="#" className="text-orange-500 hover:text-orange-700">
          <i className="fab fa-instagram text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default Footer;