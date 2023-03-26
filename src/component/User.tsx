import "../styles/user.scss"
import logo1 from  "../images/logo1.svg"
import logo2 from  "../images/logo2.svg"
import profile from  "../images/profile.svg"
import house from "../images/icons/house.svg"
import briefcase from "../images/icons/briefcase.svg"
import users from "../images/icons/users.svg"
import guarantors from "../images/icons/guarantors.svg"
import loan from "../images/icons/loan.svg"
import decision from "../images/icons/decision.svg"
import saving from "../images/icons/saving.svg"
import loanRequest from "../images/icons/loanRequest.svg"
import whiteList from "../images/icons/whiteList.svg"
import karma from "../images/icons/karma.svg"
import organisation from "../images/icons/organisation.svg"
import savingProduct from "../images/icons/savingProduct.svg"
import feesAndCh from "../images/icons/feesAndCh.svg"
import transaction from "../images/icons/transaction.svg"
import service from "../images/icons/service.svg"
import serviceAcc from "../images/icons/serviceAcc.svg"
import settlement from "../images/icons/settlement.svg"
import report from "../images/icons/report.svg"
import preferences from "../images/icons/preferences.svg"
import loanProduct from "../images/icons/loanProduct.svg"
import feeAndPri from "../images/icons/feeAndPri.svg"
import audit from "../images/icons/audit.svg"
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



const User = ()=>{
        // API
        const [table, setTable] = useState([])
        // Sorting
        const [sortKey, setSortKey] = useState<SortKeys>("orgName");
        const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
        // Pagination
        const [currentPage, setCurrentPage] = useState(4);
        const [postsPerPage, setPostsPerPage] = useState(10);

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
        
        const tableHandler = ()=>{
                console.log("working");
                
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
                </div>

                <div className="profile">
                    <h4>Docs</h4>

                    <i className="far fa-bell"></i>
                    
                    <img src={profile} id="profImg" alt="profImg" />

                    <h3>Adedeji <i className="fas fa-sort-down"></i></h3>

                </div>
            </nav>
            <div className="navSide">
                <div className="side">
                    <div className="switchOrg">
                        <img src={briefcase} alt="briefcase" />
                        <p>Switch Organization</p>
                        <i className="fas fa-sort-down"></i>
                    </div>

                    <div className="dashboard">
                        <img src={house} alt="house" />
                        <p>Dashboard</p>
                        
                    </div>

                    <p className="cus">CUSTOMERS</p>

                    <div className="link">
                            <img src={users} alt="users" />
                            <p>Users</p>
                    </div>

                    <div className="link">
                            <img src={guarantors} alt="guarantors" />
                            <p>Guarantors</p>
                    </div>

                    <div className="link">
                            <img src={loan} alt="loan" />
                            <p>Loan</p>
                    </div>

                    <div className="link">
                            <img src={decision} alt="decision" />
                            <p>Decision Models</p>
                    </div>

                    <div className="link">
                            <img src={saving} alt="saving" />
                            <p>Savings</p>
                    </div>

                    <div className="link">
                            <img src={loanRequest} alt="loanRequest" />
                            <p>Loan Requests</p>
                    </div>

                    <div className="link">
                            <img src={whiteList} alt="whiteList" />
                            <p>Whitelist</p>
                    </div>

                    <div className="link">
                            <img src={karma} alt="karma" />
                            <p>Karma</p>
                    </div>

                    <p className="cus">BUSINESSES</p>

                    <div className="link">
                            <img src={organisation} alt="organisation" />
                            <p>Organization</p>
                    </div>

                    <div className="link">
                            <img src={loanProduct} alt="loanProduct" />
                            <p>Loan Products</p>
                    </div>

                    <div className="link">
                            <img src={savingProduct} alt="savingProduct" />
                            <p>Savings Products</p>
                    </div>

                    <div className="link">
                            <img src={feesAndCh} alt="feesAndCh" />
                            <p>Fees and Charges</p>
                    </div>

                    <div className="link">
                            <img src={transaction} alt="transaction" />
                            <p>Transactions</p>
                    </div>

                    <div className="link">
                            <img src={service} alt="service" />
                            <p>Services</p>
                    </div>

                    <div className="link">
                            <img src={serviceAcc} alt="serviceAcc" />
                            <p>Service Account</p>
                    </div>

                    <div className="link">
                            <img src={settlement} alt="settlement" />
                            <p>Settlements</p>
                    </div>

                    <div className="link">
                            <img src={report} alt="report" />
                            <p>Reports</p>
                    </div>

                    <p className="cus">SETTINGS</p>

                    <div className="link">
                            <img src={preferences} alt="preferences" />
                            <p>Preferences</p>
                    </div>

                    <div className="link">
                            <img src={feeAndPri} alt="feeAndPri" />
                            <p>Fees and Pricing</p>
                    </div>

                    <div className="link">
                            <img src={audit} alt="audit" />
                            <p>Audit Logs</p>
                    </div>
                </div>

                <div className="main">
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
                                
                                

                                {sortedData().map(({orgName,userName,email,phoneNumber,lastActiveDate, id}: Info)=>{

                                        const btnColors = [inactiveBtn, blockBtn, activeBtn, pendingBtn];
                                        const btnIndex = id % btnColors.length;
                                        const btn = `${btnColors[btnIndex]}`;
                                        

                                        let formattedDate = new Date(`${lastActiveDate}`).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute:'numeric', hour12: true });

                                      return(
                                        <tr onClick={tableHandler} key={id} className="tableBody">
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
                                
                                {/* <tr className="tableBody">
                                <td data-column="First Name">Lendsqr</td>
                                <td data-column="Last Name">Adedeji</td>
                                <td data-column="Job Title">adedeji@lendsqr.com</td>
                                <td data-column="Twitter">08078903721</td>
                                <td data-column="Twitter">May 15, 2020 10:00 AM</td>
                                <td data-column="Twitter"><img src={activeBtn} alt="" /></td>
                                <td data-column="Twitter"><img src={vector} alt="" /></td>
                                </tr>
                                
                                <tr className="tableBody">
                                <td data-column="First Name">Lendsqr</td>
                                <td data-column="Last Name">Adedeji</td>
                                <td data-column="Job Title">adedeji@lendsqr.com</td>
                                <td data-column="Twitter">08078903721</td>
                                <td data-column="Twitter">May 15, 2020 10:00 AM</td>
                                <td data-column="Twitter"><img src={blockBtn} alt="" /></td>
                                <td data-column="Twitter"><img src={vector} alt="" /></td>
                                </tr>
                                
                                <tr className="tableBody">
                                <td data-column="First Name">Lendsqr</td>
                                <td data-column="Last Name">Adedeji</td>
                                <td data-column="Job Title">adedeji@lendsqr.com</td>
                                <td data-column="Twitter">08078903721</td>
                                <td data-column="Twitter">May 15, 2020 10:00 AM</td>
                                <td data-column="Twitter"><img src={inactiveBtn} alt="" /></td>
                                <td data-column="Twitter"><img src={vector} alt="" /></td>
                                </tr> */}
                                
                                </tbody>
                        </table>
                        <Pagination totalPosts={table.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                        </div>
                </div>

           


            </div>

            
        </div>
    )
}


export default User