// import DocumentType from "./document";
// import DSCType from "./dsc";
// import NomineeType from "./nominee";

type UserType = {
  name?: string;
  email?: string;
  mobileNumber?: string;
  password?: String;
  role: ROLE;
};

enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}

export default UserType;
