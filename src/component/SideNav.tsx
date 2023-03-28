import "../styles/user.scss"
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
import system from "../images/icons/system.svg"
import logout from "../images/icons/logout.svg"

type Nav = {
        sideNav:boolean;
}

const SideNav = (props: Nav)=>{

    return(

            <div  className={props.sideNav ? "side" : "sideShow"}>
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

                    <div className="link active">
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

                    <div className="link lastNav">
                            <img src={system} alt="audit" />
                            <p>Systems Messages</p>
                    </div>

                    <div className="link logout">
                            <img src={logout} alt="audit" />
                            <p>Logout</p>
                    </div>
                </div>

    )
}


export default SideNav