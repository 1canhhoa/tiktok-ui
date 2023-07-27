import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            className={cx('menu-item', { separate: data.separate })}
            leftIcon={data.icon}
            rightIcon={data.iconRight}
            to={data.to}
            onClick={onClick}
        >
            <span>{data.title}</span>
        </Button>
    );
}

export default MenuItem;
