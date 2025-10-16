import './categorySelector.css'
import { CATEGORIES, CATEGORY_LABELS, CATEGORY_INFO } from '../../data/adviceData';

const CategorySelector = () => {
    return (
        <div className='container category-selector'>
            <h3 className="category-title mb-5 me-5">Which Mind ?</h3>
            <div className="category-grid">
                {Object.values(CATEGORIES).map((category) => (
                    <button
                    key={category}
                    className={`category-button ${category}`}
                    aria-label={`Select ${CATEGORY_LABELS[category]} category`}
                    >
                        <span className="category-icon">
                            {CATEGORY_INFO[category].icon}
                        </span>
                        <span className="category-label">
                            {CATEGORY_LABELS[category]}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategorySelector;
