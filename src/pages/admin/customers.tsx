import { ReactElement, useState ,useEffect} from "react";
import { FaTrash } from "react-icons/fa";
import { Column } from "react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useSelector } from 'react-redux';
import { useAllUsersQuery ,useDeleteUserMutation} from "../../redux/api/userApi";
import toast from 'react-hot-toast';
import TableHOC from "../../components/admin/TableHOC";
// import { UserReducerInitialState } from '../../types/reducer-type';
import { CustomError } from '../../types/apitypes';
import { Skeleton } from '../../components/loader';
import { responseToast } from "../../utils/features";
import { deleteUser } from '../../../../ecommerce-backend/src/controllers/user';
import { RootState } from '../../redux/store';


interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];



const Customers = () => {

  const {user}=useSelector((state:RootState)=>state.userReducer)


  const {isLoading,data,isError,error}=useAllUsersQuery(user?._id!);
 
  const [rows, setRows] = useState<DataType[]>([]);


 const [deleteUser]=useDeleteUserMutation();

  const deleteHandler=async(userId:string)=>{
    if (!user || !user._id) {
      responseToast( "User is not authenticated", "");
      return;
  }
    const res=await deleteUser({userId,adminUserId:user?._id!});
    //console.log(user._id)
    responseToast(res,null,"");
  };



  if(isError) {
    const err=error as CustomError
    toast.error(err.data.message);
  }

  useEffect(() => {
    if(data) 
      setRows( data.user.map((i)=>({
       avatar:<img 
       style={{
        borderRadius:"50%",
       }}
       src={i.photo}
       alt ={i.name}/>,
       name:i.name,
       email:i.email,
       gender:i.gender,
       role:i.role,
       action:( <button onClick={() => deleteHandler(i._id)}>
        <FaTrash/>
       </button>
      ),})));
    
   }, [data]);

  //const [rows, setRows] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Customers",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{isLoading?<Skeleton length={14}/>:Table}</main>

    </div>
  );
};

export default Customers;
