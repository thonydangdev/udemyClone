import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Image({ className, src, alt, fallback: customFallback = images.emptyImage }, ref) {
    const [fallback, setFallback] = useState('');
    const handleFallback = () => {
        setFallback(customFallback);
    };
    return (
        <img className={cx('wrapper', className)} src={fallback || src} alt={alt} ref={ref} onError={handleFallback} />
    );
}

export default forwardRef(Image);
