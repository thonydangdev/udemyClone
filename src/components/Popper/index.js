import Button from '../Button';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
const cx = classNames.bind(styles);
function Popper({
    className,
    heading,
    href,
    children,
    paragraph,
    textButtonPopup,
    myCourses,
    cart = false,
    totalDiscountPrice,
    totalFullPrice,
}) {
    const props = { href };
    if (href) {
        props.cssIcon = true;
    } else {
        props.text = true;
    }
    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div className={cx('popup', { cart, [className]: className })} tabIndex="-1" {...attrs}>
                        {heading}
                        {paragraph && <p className={cx('paragraph')}>{paragraph}</p>}
                        {myCourses}
                        {textButtonPopup && !cart && (
                            <Button className={cx('button')} basic>
                                {textButtonPopup}
                            </Button>
                        )}
                        {cart && (
                            <div className={cx('popup-footer')}>
                                <div className={cx('price')}>
                                    <strong>Total:${totalDiscountPrice}</strong>
                                    <span>{totalFullPrice}</span>
                                </div>
                                <Button className={cx('button')} basic>
                                    {textButtonPopup}
                                </Button>
                            </div>
                        )}
                    </div>
                );
            }}
        >
            <Button {...props} primaryHover>
                {children}
            </Button>
        </Tippy>
    );
}

export default Popper;
