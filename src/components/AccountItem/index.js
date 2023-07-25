import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://vtv1.mediacdn.vn/zoom/640_400/2022/12/19/221218184732-messi-wc-trophy-16714338650611943125261-crop-1672061255342223645900.jpg"
                alt="abc"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>NhamVanHien</span>
                    <FontAwesomeIcon
                        className={cx('checkicon')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>hien123</span>
            </div>
        </div>
    );
}

export default AccountItem;
