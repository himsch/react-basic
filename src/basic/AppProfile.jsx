import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = e => {
    console.log(e);
    alert('Clicked Button');
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        image="https://images.unsplash.com/photo-1676369134323-d19cf8bb3a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1676369134323-d19cf8bb3a25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        name="James Lee"
        title="FrontEnd Developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="John"
        title="BackEnd Developer"
        isNew={false}
      />
      <Profile
        image="https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="Jack"
        title="Murder"
        isNew={true}
      />
    </>
  );
}

export default AppProfile;
