import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-2 shadow bg-gray-500">
      <Container>
        <nav className="flex items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button className="inline-block py-2 px-6 duration-200 hover:bg-blue-100 rounded-full" onClick={() => navigate(item.slug)}>{item.name}</button>
              </li>
            ): null)}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
