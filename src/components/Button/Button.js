import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    outlinePrimary,
    outlineBlack,
    small,
    big,
    rounded,
    primary,
    disabled,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('href') || (key.startsWith('on') && typeof props[key] === 'function')) {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp
            className={cx('wrapper', {
                [className]: className, //custom rieng
                primary,
                outlinePrimary,
                outlineBlack,
                small,
                big,
                rounded,
                disabled,
            })}
            {...props}
        >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('text')}>{children}</span>
            {rightIcon && <span className={cx('iconright')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    outlinePrimary: PropTypes.bool,
    outlineBlack: PropTypes.bool,
    small: PropTypes.bool,
    big: PropTypes.bool,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
