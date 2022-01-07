import React from 'react';
import './profile.css'

const Profile = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src="./img/1.jpg" alt="" />
            </div>
            <div className="profile-image">
                <img src="./img/bear.jpg" alt="" />
            </div>
            <div className="card-content">
                <h3>USER_NAME</h3>
                <h4>個性簽名：</h4><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <form action="" style={{ display: 'static', justifyItems: 'center' }}>
                <label>暱稱:</label>
                <input type="text" name="" id="" />
                <br />
                <br />
                <label>Email:</label>
                <input type="email" name="" id="" />
                <br />
                <br />
                <label >星座:</label>
                <input type="text" name="" id="" />
            </form>
            <div className="icons">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-youtube"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-whatsapp"></a>
            </div>
        </div>

    );
}

export default Profile;
