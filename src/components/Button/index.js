import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            children,
            href,
            to,
            onClick,
            className,
            text = false,
            cssIcon = false,
            primary = false,
            basic = false,
            rounded = false,
            outline = false,
            leftIcon = false,
            rightIcon = false,
            disabled = false,
            primaryHover = false,

            ...passProps
        },
        ref,
    ) => {
        const props = {
            onClick,
            ...passProps,
        };
        let Comp = 'button';
        if (href) {
            Comp = 'a';
            props.href = href;
        } else if (to) {
            Comp = Link;
            props.to = to;
        }
        const classes = cx('wrapper', {
            [className]: className,
            primary,
            outline,
            basic,
            rounded,
            text,
            cssIcon,
            primaryHover,
        });
        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.includes('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            });
        }
        return (
            <Comp className={classes} ref={ref} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        );
    },
);

export default Button;
