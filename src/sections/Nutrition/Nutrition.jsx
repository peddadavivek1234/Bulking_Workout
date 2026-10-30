import React from 'react'
import {
  FiZap,
  FiActivity,
  FiTrendingUp,
  FiDroplet,
  FiClock,
  FiArrowUpRight,
  FiTarget
} from 'react-icons/fi'
import {
  nutritionGoals,
  macroNutrients,
  dailyMeals
} from '../../data/nutrition'
import './Nutrition.css'

const goalIcons = {
  calories: <FiZap />,
  protein: <FiActivity />,
  carbs: <FiTrendingUp />,
  fats: <FiDroplet />
}

const Nutrition = () => {
  return (
    <section className="nutrition-section" id="nutrition">
      <div className="nutrition-container">

        <div className="nutrition-heading">
          <div className="nutrition-subtitle">
            <span></span>
            EAT SMART. BUILD STRONG.
          </div>

          <h2>
            FUEL YOUR <span>MUSCLE GROWTH</span>
          </h2>

          <p>
            Training builds the foundation, but proper nutrition
            supports your progress. Follow a balanced meal plan
            with enough calories, protein, carbohydrates, and fats.
          </p>
        </div>

        <div className="nutrition-goals">
          {nutritionGoals.map((goal) => (
            <div className="nutrition-goal-card" key={goal.id}>
              <div className="nutrition-goal-top">
                <div className="nutrition-goal-icon">
                  {goalIcons[goal.icon]}
                </div>

                <span className="nutrition-goal-label">
                  DAILY TARGET
                </span>
              </div>

              <h3>
                {goal.value}
                <span>{goal.unit}</span>
              </h3>

              <h4>{goal.title}</h4>
              <p>{goal.description}</p>
            </div>
          ))}
        </div>

        <div className="macro-section">
          <div className="nutrition-subheading">
            <div>
              <span>UNDERSTAND YOUR MACROS</span>
              <h3>THE RIGHT NUTRIENT BALANCE</h3>
            </div>

            <FiTarget />
          </div>

          <div className="macro-grid">
            {macroNutrients.map((macro) => (
              <div
                className={`macro-card ${macro.color}`}
                key={macro.id}
              >
                <div className="macro-card-top">
                  <h4>{macro.name}</h4>
                  <span>{macro.percentage}</span>
                </div>

                <h3>{macro.amount}</h3>

                <div className="macro-progress">
                  <span
                    style={{ width: macro.percentage }}
                  ></span>
                </div>

                <p>{macro.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="meal-section">
          <div className="meal-heading">
            <div>
              <span>YOUR DAILY FOOD ROUTINE</span>
              <h3>DAILY BULKING MEAL PLAN</h3>
            </div>

            <p>
              Five balanced meals to help organize your daily
              nutrition around your training routine.
            </p>
          </div>

          <div className="meal-grid">
            {dailyMeals.map((meal) => (
              <div className="meal-card" key={meal.id}>
                <div className="meal-image-wrapper">
                  <img src={meal.image} alt={meal.name} />

                  <span className="meal-category">
                    {meal.category}
                  </span>
                </div>

                <div className="meal-content">
                  <div className="meal-time">
                    <FiClock />
                    {meal.time}
                  </div>

                  <h4>{meal.name}</h4>

                  <p className="meal-description">
                    {meal.description}
                  </p>

                  <div className="meal-foods">
                    {meal.foods}
                  </div>

                  <div className="meal-calories">
                    <FiZap />
                    <span>{meal.calories}</span>
                  </div>

                  <div className="meal-macros">
                    <div>
                      <span>Protein</span>
                      <strong>{meal.protein}</strong>
                    </div>

                    <div>
                      <span>Carbs</span>
                      <strong>{meal.carbs}</strong>
                    </div>

                    <div>
                      <span>Fats</span>
                      <strong>{meal.fats}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="nutrition-bottom">
          <div className="nutrition-bottom-icon">
            <FiActivity />
          </div>

          <div className="nutrition-bottom-content">
            <h3>Fuel Your Body. Support Your Progress.</h3>
            <p>
              Your calorie and macro needs depend on your body,
              activity level, and goals. Adjust your food portions
              based on your progress.
            </p>
          </div>

          <a href="#benefits" className="nutrition-bottom-link">
            Explore Benefits <FiArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Nutrition
