import { useState, forwardRef } from 'react';
import image from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            className={classNames(styles.wrapper, className)}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
