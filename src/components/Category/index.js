import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import { category } from '~/data';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Category({ children }) {
    const [cateItem, setCateItem] = useState(category[0].name);
    return (
        <Tippy
            marginTop={10}
            interactive
            zIndex={9999}
            placement="bottom-start"
            render={(attrs) => (
                <div className={cx('box')} tabIndex="-1" {...attrs}>
                    <div className={cx('cate-box')}>
                        {category.map((cate, index) => (
                            <Button
                                rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                                key={index}
                                text
                                onMouseEnter={() => setCateItem(cate.name)}
                                className={cx('cate-item')}
                            >
                                <span>{cate.name}</span>
                            </Button>
                        ))}
                    </div>
                    <div className={cx('cate-box')}>
                        {category
                            .find((cate) => cate.name === cateItem)
                            .subcategory.map((subcateItem) => (
                                <Button
                                    key={subcateItem}
                                    rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
                                    text
                                    className={cx('cate-item')}
                                >
                                    <span>{subcateItem}</span>
                                </Button>
                            ))}
                    </div>
                </div>
            )}
        >
            <nav className={cx('wrapper')}>{children}</nav>
        </Tippy>
    );
}
export default Category;
