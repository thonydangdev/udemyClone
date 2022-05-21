import Button from '../Button';
import classNames from 'classnames/bind';
import styles from './CourseItem.module.scss';
import Image from '../Image';
import Progress from '../Progress';
const cx = classNames.bind(styles);
function CourseItem({ course, cart }) {
    const { id, imgSrc, name, progress, author, fullPrice, discountPrice, type } = course;
    return (
        <>
            <div className={cx('course-item', { cart })} key={id}>
                <div className={cx('course-content')}>
                    <Image className={cx('course-img')} src={imgSrc} alt="" />
                    <div className="course-info">
                        <h2 className={cx('course-title')}>{name}</h2>
                        {progress && <Progress percent={progress} className={cx('course-progress')} />}
                        {author && <p className={cx('course-author')}>{author}</p>}
                        {fullPrice && (
                            <div className={cx('course-price')}>
                                <strong>{discountPrice + '$'}</strong>
                                <span>{fullPrice + '$'}</span>
                            </div>
                        )}
                    </div>
                </div>
                {type === 'wishList' && <Button outline>Add to cart</Button>}
            </div>
        </>
    );
}

export default CourseItem;
