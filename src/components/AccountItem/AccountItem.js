import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import image from '~/assets/images';
const cx = classNames.bind(Styles);
function AccountItem({ account }) {
    return (
        <Link to={`/${account.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={account.avatar} alt="abc" fallback={image.fallbackLogo} />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{account.full_name}</span>
                    {account.tick && <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{account.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    account: PropTypes.object,
};

export default AccountItem;
