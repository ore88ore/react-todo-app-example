const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 mt-8 border-t">
      <div className="container mx-auto text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Todo App Example - Playwright テスト用</p>
      </div>
    </footer>
  );
};

export default Footer;
