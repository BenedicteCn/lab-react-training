import profilesData from '../data/berlin.json';
import './IdCard.css'

const FaceBook = () => {

  function type (profile) {

    if (profile === true){
      return "Student"
    } else {
      return "Teacher"
    }
  }

  return (
    <div>
      {profilesData.map((profile) => {
      return (
        <div className = "card" key={profile.id}>
        <img src={profile.img} className="driver" alt="driver" />
        <p>First name: {profile.firstName}</p>
        <p>Last name:{profile.lastName}</p>
        <p>Country:{profile.country}</p>
        <p>Type: {type(profile.isStudent)}</p></div>
      )})}
    </div>
  )
}

export default FaceBook
