import "../styles/user.scss"
import logo1 from  "../images/logo1.svg"
import logo2 from  "../images/logo2.svg"
import profile from  "../images/profile.svg"
import userColor from "../images/icons/userColor.svg"
import activeUsers from "../images/icons/activeUsers.svg"
import userLoan from "../images/icons/userLoan.svg"
import userSavings from "../images/icons/userSavings.svg"
import filter from "../images/icons/filter.svg"
import vector from "../images/icons/vector.svg"
import inactiveBtn from "../images/icons/inactiveBtn.svg"
import blockBtn from "../images/icons/blockBtn.svg"
import activeBtn from "../images/icons/activeBtn.svg"
import pendingBtn from "../images/icons/pendingBtn.svg"
import { useEffect, useState,useCallback,MouseEventHandler } from "react"
import Pagination from "./Pagination"
import SideNav from "./SideNav"
import UserSelected from "./UserSelected"



const User = ()=>{
        // API
        const [table, setTable] = useState([])
        // Sorting
        const [sortKey, setSortKey] = useState<SortKeys>("orgName");
        const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
        // Pagination
        const [currentPage, setCurrentPage] = useState(1);
        // eslint-disable-next-line
        const [postsPerPage, setPostsPerPage] = useState(10);

        // selecte user
        const [selectedUser, setSelectedUser] = useState({});
        const [userSelected, setUserSelected] = useState(false);

        const [sideNav, setSideNav] = useState(true);
        const [main, setMain] = useState(true);



        useEffect(()=>{
                const getTable = async()=>{
                        const data = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
                        const res = await data.json()
                        console.log(res);
                        setTable(res)
                        
                }
                getTable()
        },[])

        // -------------------------------------------Start Pagination Codes--------------------------------
        const lastPostIndex = currentPage * postsPerPage;
        const firstPostIndex = lastPostIndex - postsPerPage;
        const currentPosts = table.slice(firstPostIndex, lastPostIndex);

        console.log(currentPosts);
        

        // -------------------------------------------Start Sorting Codes--------------------------------
        interface Info {
                orgName: string;
                userName: string;
                email: string;
                phoneNumber: string;
                lastActiveDate: string;
                id: number; // Add this line to specify that `id` is a number
              }

        type Data = typeof table;

        type SortKeys = keyof Data[0];

        type SortOrder = "ascn" | "desc";

        function sortData({
                tableData,
                sortKey,
                reverse,
              }: {
                tableData: Data;
                sortKey: SortKeys;
                reverse: boolean;
              }) {
                if (!sortKey) return tableData;
              
                const sortedData = currentPosts.sort((a, b) => {
                  return a[sortKey] > b[sortKey] ? 1 : -1;
                });
              
                if (reverse) {
                  return sortedData.reverse();
                }
              
                // return sortedData;
                return tableData
              }

              const sortedData = useCallback(
                () => sortData({ tableData: currentPosts, sortKey, reverse: sortOrder === "desc" }),
                // eslint-disable-next-line
                [currentPosts, sortKey, sortOrder]
              );

              function SortButton({
                sortOrder,
                columnKey,
                sortKey,
                onClick,
              }: {
                sortOrder: SortOrder;
                columnKey: SortKeys;
                sortKey: SortKeys;
                onClick: MouseEventHandler<HTMLButtonElement>;
              }) {
                return (
                  <span
                    onClick={onClick}
                  >
                    {sortKey === columnKey && sortOrder === "desc"?<img className="filterAlt" src={filter} alt="filter" /> : <img className="filter" src={filter} alt="filter" />}
                  </span>
                );
              }

              const changeSort = (key: SortKeys)=>{
                setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

                setSortKey(key);
              }

        // -------------------------------------------End Sorting Codes-------------------------------- 
        
        const tableHandler = (data:object)=>{
                console.log(data);
                setSelectedUser(data);
                setUserSelected(true);
                
        }

        const menuToggle = ()=>{
          setMain(!main)
          setSideNav(!sideNav)
        }

    return(
        <div className="user">
            <nav className="navTop">
                <div className="logo">
                    <img src={logo1} id="logo1" alt="logo1" />
                    <img src={logo2} id="log2" alt="logo2" />
                </div>

                <div>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search for anything"/>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>

                    <i onClick={menuToggle}  className="menu fas fa-bars"></i>
                </div>

                <div className="profile">
                    <h4>Docs</h4>

                    <i className="far fa-bell"></i>
                    
                    <img src={profile} id="profImg" alt="profImg" />

                    <h3>Adedeji <i className="fas fa-sort-down"></i></h3>

                </div>
            </nav>
            <div className="navSide">
                <SideNav sideNav={sideNav}/>

                {userSelected ? <UserSelected data={selectedUser} setSelectedUser={setSelectedUser} setUserSelected={setUserSelected}/> :

                <div className={main ? "main" : "mainhide"}>
                        <div className="container">
                                <h2>Users</h2>

                                <div className="cardGrid">
                                        <div className="card">
                                             <img className="p1" src={userColor} alt="userColor" /> 
                                             <p className="cardText">USERS</p>  
                                             <h2 className="p1">2,453</h2>
                                        </div>
                                        
                                        <div className="card">
                                             <img className="p1" src={activeUsers} alt="activeUsers" /> 
                                             <p className="cardText">Active Users</p>  
                                             <h2 className="p1">2,453</h2>
                                        </div>
                                        
                                        <div className="card">
                                             <img className="p1" src={userLoan} alt="userLoan" /> 
                                             <p className="cardText">Users with Loans</p>  
                                             <h2 className="p1">12,453</h2>
                                        </div>
                                        
                                        <div className="card">
                                             <img className="p1" src={userSavings} alt="userSavings" /> 
                                             <p className="cardText">Users with Savings</p>  
                                             <h2 className="p1">102,453</h2>
                                        </div>   

                                </div>
                      <div className="tablePhone">
                        <table>
                                <thead>
                                <tr>
                                <th>ORGANIZATION <SortButton columnKey={"orgName"} onClick={() => changeSort("orgName")}{...{sortOrder,sortKey,}}/></th>
                                <th>USERNAME<SortButton columnKey={"userName"} onClick={() => changeSort("userName")}{...{sortOrder,sortKey,}}/></th>
                                <th>EMAIL<SortButton columnKey={"email"} onClick={() => changeSort("email")}{...{sortOrder,sortKey,}}/></th>
                                <th>PHONE NUMBER<SortButton columnKey={"phoneNumber"} onClick={() => changeSort("phoneNumber")}{...{sortOrder,sortKey,}}/></th>
                                <th>DATE JOINED<SortButton columnKey={"lastActiveDate"} onClick={() => changeSort("lastActiveDate")}{...{sortOrder,sortKey,}}/></th>
                                <th>STATUS<SortButton columnKey={"status"} onClick={() => changeSort("status")}{...{sortOrder,sortKey,}}/></th>
                                <th> </th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                

                                {sortedData().map((data: Info)=>{
                                     const  {orgName,userName,email,phoneNumber,lastActiveDate, id} = data
                                        const btnColors = [inactiveBtn, blockBtn, activeBtn, pendingBtn];
                                        const btnIndex = id % btnColors.length;
                                        const btn = `${btnColors[btnIndex]}`;
                                        

                                        let formattedDate = new Date(`${lastActiveDate}`).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute:'numeric', hour12: true });

                                      return(
                                        <tr onClick={()=>tableHandler(data)} key={id} className="tableBody">
                                        <td key="orgName">{orgName}</td>
                                        <td key="userName">{userName}</td>
                                        <td key="email">{email}</td>
                                        <td key="phoneNumber">{phoneNumber}</td>
                                        <td key="lastActiveDate">{formattedDate}</td>
                                        <td key="status"><img src={btn} alt="" /></td>
                                        <td key=""><img src={vector} alt="" /></td>
                                        </tr>
                                      )  
                                })}
                                
                                </tbody>
                        </table>

                      </div>
                        <Pagination totalPosts={table.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                        </div>
                </div>
                }
            </div>
          
        </div>
    )
}


export default User