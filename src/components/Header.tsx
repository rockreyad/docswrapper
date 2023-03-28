import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn-ghost btn text-xl normal-case">Docs Wrapper</a>
        </div>
        <div className="flex-none">
          {sessionData?.user ? (
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img
                    src={`${sessionData?.user?.image}`}
                    alt={`${sessionData?.user?.name}`}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li className="menu-title">
                  <span className="text-gray-800">
                    {sessionData?.user?.name}
                  </span>
                </li>
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => void signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <button onClick={() => void signIn()} className="btn-primary btn">
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};
