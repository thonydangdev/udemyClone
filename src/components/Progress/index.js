import classNames from 'classnames/bind';
import styles from './Progress.module.scss';
const cx = classNames.bind(styles);
function Progress({ percent }) {
    return <div style={{ '--progress-success': percent + '%' }} className={cx('wrapper')}></div>;
}

export default Progress;
