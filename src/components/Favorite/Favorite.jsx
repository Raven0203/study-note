import { Checkbox } from '@mui/material';



import './favorite.css'

const Favorite = () => {





    const data2 = [
        { "id": "1", "name": "Terry", "age": "13" },
        { "id": "2", "name": "Terry", "age": "13" },
        { "id": "3", "name": "Terry", "age": "13" },
        { "id": "4", "name": "Terry", "age": "13" },
        { "id": "5", "name": "Terry", "age": "13" },
    ]




    return (
        <div className='Box' style={{ backgroundColor: 'white' }}>
            <h1 className='Box-title'>收藏頁面</h1>


            <div className='favorite-box'>

                <div className='table-1'>

                    <a className='author-title' href="">宋會銘</a><p className='favorite-context'> 標題：Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>
                <div className='table-1'>

                    <p className='favorite-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>
                <div className='table-1'>

                    <p className='favorite-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>
                <div className='table-1'>

                    <p className='favorite-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>
                <div className='table-1'>

                    <p className='favorite-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>
                <div className='table-1'>

                    <p className='favorite-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>
                <div className='table-1'>

                    <p className='favorite-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>
                <div className='table-1'>

                    <p className='favorite-context'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, cumque temporibus. Maxime, eius explicabo? Quidem, dolores. Laborum earum, quam beatae, quasi aperiam dignissimos quas </p>
                    <Checkbox />
                </div>


            </div>
        </div>
    );
}

export default Favorite;
