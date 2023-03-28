import backIcon from "../images/icons/backIcon.svg";
import person from "../images/icons/person.svg";
import "../styles/userSelected.scss";

type Information = {
  data: any;
  setSelectedUser: any;
  setUserSelected:any;
};


// eslint-disable-next-line
const UserSelected = (props: Information) => {

  const goBackToTable = ()=>{
    console.log("clicked");
    
    props.setSelectedUser(null)
    props.setUserSelected(false)
  }

  const {userName,accountBalance,accountNumber,profile,email,education,socials,guarantor} = props.data

  console.log(profile.avatar);
  

  return (
    <div className="main">
      <div className="container">
        <div onClick={()=> goBackToTable()} className="backIcon">
          <img  src={backIcon} alt="backIcon" />
          <p> Back to Users</p>
        </div>

        <div className="statusBtnFlex">
          <h2>User Details</h2>

          <div>
            <button className="statusBtn blocked">BLACKLIST USER</button>
            <button className="statusBtn active">ACTIVATE USER</button>
          </div>
        </div>

        <div className="userHeader">
          <div className="userHeaderTop">
            <div className="userHeaderProf">
              <div className="userHeaderImg">
                <img src={profile.avatar} className="userHeaderImgR" alt="" />
              </div>
              <div>
                <h4>{userName}</h4>
                <p className="userHeaderProfP">LSQFf587g90</p>
              </div>
            </div>
            <div className="userHeaderB">
              <p className="userHeaderP">User’s Tier</p>
              <div>
                <i className="fas fa-star" style={{ color: "yellow" }}></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="userHeaderA">
              <h4>₦{accountBalance}</h4>
              <p>{accountNumber}/Providus Bank</p>
            </div>
          </div>
          <div className="userHeaderBottom">
            <p>General Details</p>
            <p>Documents</p>
            <p>Bank Details</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>App and System</p>
          </div>
        </div>

        <div className="userBody">
          <div>
            <h3>Personal Information</h3>

            <div className="userBodyGrid">
              <div>
                <p>FULL NAME</p>
                <h4>{`${profile.firstName} ${profile.lastName}`}</h4>
              </div>
              <div>
                <p>PHONE NUMBER</p>
                <h4>{profile.phoneNumber}</h4>
              </div>
              <div>
                <p>EMAIL ADDRESS</p>
                <h4>{email}</h4>
              </div>
              <div>
                <p>BVN</p>
                <h4>{profile.bvn}</h4>
              </div>
              <div>
                <p>GENDER</p>
                <h4>{profile.gender}</h4>
              </div>
              <div>
                <p>MARITAL STATUS</p>
                <h4></h4>
              </div>
              <div>
                <p>CHILDREN</p>
                <h4></h4>
              </div>
              <div>
                <p>TYPE OF RESIDENCE</p>
                <h4>Apartment</h4>
              </div>
            </div>
          </div>

          <div>
            <h3>Education and Employment</h3>

            <div className="userBodyGridEdu">
              <div>
                <p>LEVEL OF EDUCATION</p>
                <h4>{education.level}</h4>
              </div>
              <div>
                <p>EMPLOYMENT STATUS</p>
                <h4>{education.employmentStatus}</h4>
              </div>
              <div>
                <p>SECTOR OF EMPLOYMENT</p>
                <h4>{education.sector}</h4>
              </div>
              <div>
                <p>DURATION OF EMPLOYMENT</p>
                <h4>{education.duration}</h4>
              </div>
              <div>
                <p>OFFICE EMAIL</p>
                <h4>{education.duration}</h4>
              </div>
              <div>
                <p>MONTHLY INCOME</p>
                <h4>₦{education.monthlyIncome[1]}- ₦{education.monthlyIncome[0]}</h4>
              </div>
              <div>
                <p>LOAN REPAYMENT</p>
                <h4>₦{education.loanRepayment}</h4>
              </div>
            </div>
          </div>

          <div>
            <h3>Socials</h3>

            <div className="userBodyGridSoc">
              <div>
                <p>Twitter</p>
                <h4>{socials.twitter}</h4>
              </div>
              <div>
                <p>Facebook</p>
                <h4>{socials.facebook}</h4>
              </div>
              <div>
                <p>Instagram</p>
                <h4>{socials.instagram}</h4>
              </div>
             
            </div>
          </div>

          <div>
            <h3>Guarantor</h3>

            <div className="userBodyGridSoc">
              <div>
                <p>FULL NAME</p>
                <h4>{guarantor.firstName} {guarantor.lastName}</h4>
              </div>
              <div>
                <p>PHONE NUMBER</p>
                <h4>{guarantor.phoneNumber}</h4>
              </div>
              <div>
                <p>EMAIL ADDRESS</p>
                <h4></h4>
              </div>
              <div>
                <p>RELATIONSHIP</p>
                <h4></h4>
              </div>
             
            </div>
          </div>

          <div className="Guarantor">
            <h3></h3>

            <div className="userBodyGridGuarantor">
              <div>
                <p>FULL NAME</p>
                <h4>{guarantor.firstName} {guarantor.lastName}</h4>
              </div>
              <div>
                <p>PHONE NUMBER</p>
                <h4>{guarantor.phoneNumber}</h4>
              </div>
              <div>
                <p>EMAIL ADDRESS</p>
                <h4></h4>
              </div>
              <div>
                <p>RELATIONSHIP</p>
                <h4></h4>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelected;
