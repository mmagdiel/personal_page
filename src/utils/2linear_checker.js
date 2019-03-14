import PropTypes from 'prop-types'

/**
 * Check values ​​by priority returned the highest priority value and add the independent term
 * @param {string} x_gradient  highest priority
 * @param {string} y_gradient  medium priority
 * @param {string} defultVal   default value
 * @param {string} independent value added at the end
 */
const fn = (x_gradient, 
    y_gradient, 
    defultVal, 
    independent) => (
        (x_gradient ? x_gradient : 
            (y_gradient? y_gradient: defultVal)
        ) + independent
    )

fn.propTypes = {
    x_gradient: PropTypes.string,
    y_gradient: PropTypes.string,
    defultVal: PropTypes.string.isRequired,
    independent: PropTypes.string.isRequired
}

export default fn
