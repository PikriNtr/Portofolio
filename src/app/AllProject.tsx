import { copyFile } from "fs";
import Link from "next/link"

const AllProject = () => {
  return <Link 
            href={"./AllProject"} 
            legacyBehavior
            >
              <button className='w-1/3 sm:w-auto'>
                AllProject
              </button>
          </Link>;
};

export default AllProject;

