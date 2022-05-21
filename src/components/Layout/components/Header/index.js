import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { myData } from '~/data/';
import Category from '~/components/Category';
import React from 'react';
import Popper from '~/components/Popper';
// import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import CourseItem from '~/components/CourseItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
                <Category className={cx('category')}>Category</Category>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search your research..." />
                    <button className={cx('btn-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <Popper
                        paragraph="Get your team access to over 15,000 top Udemy courses, anytime, anywhere."
                        textButtonPopup="Try Udemy Business"
                    >
                        Udemy Business
                    </Popper>
                    <Popper
                        paragraph="Turn what you know into an opportunity and reach millions around the world."
                        textButtonPopup="Learn more"
                    >
                        Teach On Udemy
                    </Popper>
                    <Popper
                        myCourses={
                            <div className={cx('courses-learning')}>
                                {myData.myLearning.map((course, index) => (
                                    <CourseItem course={course} key={index} />
                                ))}
                            </div>
                        }
                        textButtonPopup="Go to learning"
                    >
                        My learning
                    </Popper>
                    <Popper
                        myCourses={
                            <div className={cx('courses-learning')}>
                                {myData.myWishList.map((course, index) => (
                                    <CourseItem course={course} key={index} />
                                ))}
                            </div>
                        }
                        textButtonPopup="Go to wishlist"
                        href="#"
                        className={cx('actions-item')}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </Popper>
                    <Popper
                        myCourses={
                            <div className={cx('courses-learningcart')}>
                                {myData.myCart.map((course, index) => (
                                    <CourseItem cart course={course} key={index} />
                                ))}
                            </div>
                        }
                        cart
                        totalFullPrice={49.99}
                        totalDiscountPrice={30.99}
                        textButtonPopup="Go to cart"
                        href="#"
                        className={cx('actions-item')}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Popper>
                    <Popper
                        heading={
                            <div className={cx('popup-heading')}>
                                <span className={cx('popup-title')}>Notifications</span>
                                <a href="/" className={cx('btn-settings-notifications')}>
                                    Settings
                                </a>
                            </div>
                        }
                        myCourses={'No notifications'}
                        href="#"
                        className={cx('actions-item')}
                    >
                        <FontAwesomeIcon icon={faBell} />
                    </Popper>
                    <Popper></Popper>
                </div>
            </div>
        </header>
    );
}

export default Header;
