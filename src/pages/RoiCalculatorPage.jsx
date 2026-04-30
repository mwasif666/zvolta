export default function RoiCalculatorPage() {
  return (
    <>
      <style data-page-style="roi-calculator:1">{`* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            min-height: 100vh;
            padding: 20px;
            position: relative;
        }

        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at top, rgba(16, 185, 129, 0.15) 0%, transparent 60%);
            pointer-events: none;
            z-index: 0;
        }

        .calculator-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            position: relative;
            z-index: 1;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
            background: linear-gradient(135deg, #10b981 0%, #ffffff 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .tabs-container {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .tab-btn {
            padding: 15px 40px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 3px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .tab-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .tab-btn.active {
            background: white;
            color: #10b981;
            border-color: #10b981;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .chargers-section {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
        }

        .charger-module {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            border-left: 4px solid #10b981;
            position: relative;
        }

        .charger-module-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }

        .charger-module-title {
            font-weight: 600;
            color: #10b981;
            font-size: 1rem;
        }

        .remove-charger-btn {
            background: #dc3545;
            color: white;
            border: none;
            padding: 5px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: background 0.2s;
        }

        .remove-charger-btn:hover {
            background: #c82333;
        }

        .add-charger-btn {
            width: 100%;
            padding: 12px;
            background: white;
            color: #10b981;
            border: 2px dashed #10b981;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            margin-top: 10px;
        }

        .add-charger-btn:hover {
            background: #f0fdf4;
            border-color: #059669;
            color: #059669;
        }

        .input-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .dashboard {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .card {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 1px rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.1);
        }

        .card-header {
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 3px solid #10b981;
        }

        .input-group {
            margin-bottom: 25px;
        }

        .input-group label {
            display: block;
            font-size: 0.95rem;
            font-weight: 600;
            color: #555;
            margin-bottom: 8px;
        }

        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }

        .input-prefix {
            position: absolute;
            left: 15px;
            font-weight: 600;
            color: #10b981;
            font-size: 1.1rem;
        }

        .input-group input {
            width: 100%;
            padding: 15px 15px 15px 35px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s;
        }

        .input-group input:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }

        .calculate-btn {
            width: 100%;
            padding: 18px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .calculate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(16, 185, 129, 0.5);
        }

        .calculate-btn:active {
            transform: translateY(0);
        }

        .results-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .result-card {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            transition: transform 0.2s;
        }

        .result-card:hover {
            transform: translateY(-5px);
        }

        .result-label {
            font-size: 0.9rem;
            color: #666;
            font-weight: 600;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .result-value {
            font-size: 2rem;
            font-weight: 700;
            color: #10b981;
            margin-bottom: 5px;
        }

        .result-subtext {
            font-size: 0.85rem;
            color: #888;
        }

        .highlight-card {
            grid-column: 1 / -1;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            text-align: center;
            padding: 30px;
        }

        .highlight-card .result-label {
            color: rgba(255, 255, 255, 0.9);
        }

        .highlight-card .result-value {
            color: white;
            font-size: 2.5rem;
        }

        .chart-container {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
        }

        .chart-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }

        .breakdown-list {
            list-style: none;
        }

        .breakdown-item {
            display: flex;
            justify-content: space-between;
            padding: 15px;
            margin-bottom: 10px;
            background: white;
            border-radius: 8px;
            border-left: 4px solid #10b981;
        }

        .breakdown-item span:first-child {
            font-weight: 600;
            color: #555;
        }

        .breakdown-item span:last-child {
            font-weight: 700;
            color: #10b981;
        }

        .full-width-card {
            grid-column: 1 / -1;
        }

        .progress-bar {
            width: 100%;
            height: 30px;
            background: #e0e0e0;
            border-radius: 15px;
            overflow: hidden;
            margin: 20px 0;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #10b981 0%, #059669 100%);
            transition: width 0.5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            font-size: 0.9rem;
        }

        .assumptions {
            background: #f0fdf4;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #10b981;
            margin-top: 20px;
        }

        .assumptions h3 {
            font-size: 1rem;
            color: #166534;
            margin-bottom: 10px;
        }

        .assumptions ul {
            list-style: none;
            color: #166534;
        }

        .assumptions li {
            padding: 5px 0;
            font-size: 0.9rem;
        }

        .assumptions li:before {
            content: "▸ ";
            font-weight: bold;
        }

        @media (max-width: 968px) {
            .dashboard {
                grid-template-columns: 1fr;
            }

            .results-grid {
                grid-template-columns: 1fr;
            }

            .header h1 {
                font-size: 2rem;
            }

            .result-value {
                font-size: 1.5rem;
            }
        }

        .hidden {
            display: none;
        }

        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }`}</style>
      <div>
        <div className="calculator-container">
          <div className="header">
            <h1>⚡ EV Charger ROI Calculator</h1>
            <p>Calculate your return on investment for EV Chargers</p>
          </div>
          <div className="tabs-container">
            <button
              className="tab-btn active"
              data-inline-onclick="switchTab('3.3kWh')"
            >
              3.3 kWh Charger
            </button>
            <button className="tab-btn" data-inline-onclick="switchTab('7kWh')">
              7 kWh Charger
            </button>
          </div>
          {/* 3.3 kWh Tab Content */}
          <div id="tab-3.3kWh" className="tab-content active">
            <div className="dashboard">
              {/* Input Card */}
              <div className="card">
                <div className="card-header">📊 Investment Parameters</div>
                <div className="input-group">
                  <label htmlFor="baseChargerCost">
                    Base Charger Cost (1 Charger)
                  </label>
                  <div className="input-wrapper">
                    <span className="input-prefix">Rs</span>
                    <input
                      type="number"
                      id="baseChargerCost"
                      defaultValue={75000}
                      min={0}
                      step={1000}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="moduleCost">
                    Additional Module Cost (2 Chargers)
                  </label>
                  <div className="input-wrapper">
                    <span className="input-prefix">Rs</span>
                    <input
                      type="number"
                      id="moduleCost"
                      defaultValue={75000}
                      min={0}
                      step={1000}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="marginPerUnit">
                    Margin Per Unit (Rs/kWh)
                  </label>
                  <div className="input-wrapper">
                    <span className="input-prefix">Rs</span>
                    <input
                      type="number"
                      id="marginPerUnit"
                      defaultValue={5}
                      min={0}
                      step="0.5"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="avgConsumption">
                    Average Consumption Per Hour (kWh)
                  </label>
                  <div className="input-wrapper">
                    <span className="input-prefix">⚡</span>
                    <input
                      type="number"
                      id="avgConsumption"
                      defaultValue={1}
                      min="0.1"
                      max="3.3"
                      step="0.1"
                    />
                  </div>
                </div>
                <div className="chargers-section">
                  <div style={{ marginBottom: 20 }}>
                    <label
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#333",
                        display: "block",
                        marginBottom: 15,
                      }}
                    >
                      🔌 Base Charger (1 Charger)
                    </label>
                    <div
                      className="charger-module"
                      style={{ borderLeftColor: "#28a745" }}
                    >
                      <div className="input-group" style={{ marginBottom: 0 }}>
                        <label>Average Usage Per Day (Hours)</label>
                        <div className="input-wrapper">
                          <span className="input-prefix">⏱</span>
                          <input
                            type="number"
                            id="baseChargerUsage"
                            defaultValue={10}
                            min={0}
                            max={24}
                            step="0.5"
                            data-inline-onchange="calculateROI()"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <label
                      style={{
                        margin: 0,
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#333",
                      }}
                    >
                      📦 Additional Modules (Each = 2 Chargers)
                    </label>
                    <span
                      style={{ fontSize: "0.85rem", color: "#666" }}
                      id="totalModulesCount"
                    >
                      0 Modules
                    </span>
                  </div>
                  <div id="chargersContainer">
                    {/* Additional modules will be added here */}
                  </div>
                  <button
                    className="add-charger-btn"
                    data-inline-onclick="addCharger()"
                  >
                    + Add Another Module (2 Chargers)
                  </button>
                </div>
                <button
                  className="calculate-btn"
                  data-inline-onclick="calculateROI()"
                >
                  Calculate ROI
                </button>
                <div className="assumptions">
                  <h3>📌 Assumptions</h3>
                  <ul>
                    <li>Base charger: 1 charger unit</li>
                    <li>Each additional module: 2 chargers</li>
                    <li>Operating days: 365 days per year</li>
                    <li>Charger capacity: 3.3 kWh</li>
                    <li>Currency: PKR (Pakistani Rupee)</li>
                  </ul>
                </div>
              </div>
              {/* Results Card */}
              <div className="card">
                <div className="card-header">💰 Financial Projections</div>
                <div id="resultsContainer" className="hidden">
                  <div className="results-grid">
                    <div className="result-card">
                      <div className="result-label">Total Investment</div>
                      <div className="result-value" id="totalInvestment">
                        Rs 0
                      </div>
                      <div className="result-subtext">All modules</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Annual Revenue</div>
                      <div className="result-value" id="annualRevenue">
                        Rs 0
                      </div>
                      <div className="result-subtext">Per year</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Monthly Revenue</div>
                      <div className="result-value" id="monthlyRevenue">
                        Rs 0
                      </div>
                      <div className="result-subtext">Per month</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Daily Revenue</div>
                      <div className="result-value" id="dailyRevenue">
                        Rs 0
                      </div>
                      <div className="result-subtext">Per day</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Total Units/Year</div>
                      <div className="result-value" id="totalUnits">
                        0
                      </div>
                      <div className="result-subtext">kWh consumed</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Additional Modules</div>
                      <div className="result-value" id="totalModules">
                        0
                      </div>
                      <div className="result-subtext">+ 1 Base charger</div>
                    </div>
                    <div className="result-card">
                      <div className="result-label">Total Chargers</div>
                      <div className="result-value" id="totalChargersUnits">
                        1
                      </div>
                      <div className="result-subtext">All units</div>
                    </div>
                    <div className="highlight-card">
                      <div className="result-label">Payback Period</div>
                      <div className="result-value" id="paybackPeriod">
                        0 Months
                      </div>
                      <div className="result-subtext">
                        Time to recover investment
                      </div>
                    </div>
                  </div>
                  <div className="chart-container">
                    <div className="chart-title">📈 Revenue Breakdown</div>
                    <ul className="breakdown-list">
                      <li className="breakdown-item">
                        <span>Investment Required</span>
                        <span id="investmentBreakdown">Rs 75,000</span>
                      </li>
                      <li className="breakdown-item">
                        <span>Annual Revenue</span>
                        <span id="annualRevenueBreakdown">Rs 0</span>
                      </li>
                      <li className="breakdown-item">
                        <span>5-Year Revenue</span>
                        <span id="fiveYearRevenue">Rs 0</span>
                      </li>
                      <li className="breakdown-item">
                        <span>5-Year Net Profit</span>
                        <span id="fiveYearProfit">Rs 0</span>
                      </li>
                    </ul>
                  </div>
                  <div className="chart-container">
                    <div className="chart-title">🎯 ROI Progress</div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        id="roiProgress"
                        style={{ width: "0%" }}
                      >
                        0% ROI
                      </div>
                    </div>
                    <p
                      style={{
                        textAlign: "center",
                        color: "#666",
                        fontSize: "0.9rem",
                        marginTop: 10,
                      }}
                    >
                      Annual Return on Investment
                    </p>
                  </div>
                </div>
                <div
                  id="noResults"
                  style={{ textAlign: "center", color: "#999", padding: 40 }}
                >
                  <svg
                    width={100}
                    height={100}
                    viewBox="0 0 100 100"
                    style={{ opacity: "0.3", marginBottom: 20 }}
                  >
                    <circle
                      cx={50}
                      cy={50}
                      r={40}
                      stroke="#10b981"
                      strokeWidth={3}
                      fill="none"
                    />
                    <text
                      x={50}
                      y={60}
                      fontSize={35}
                      textAnchor="middle"
                      fill="#10b981"
                    >
                      Rs
                    </text>
                  </svg>
                  <p style={{ fontSize: "1.1rem" }}>
                    Enter your parameters and click Calculate to see results
                  </p>
                </div>
              </div>
            </div>
            {/* Additional Insights Card */}
            <div className="card full-width-card hidden" id="insightsCard">
              <div className="card-header">💡 Investment Insights</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: 20,
                }}
              >
                <div className="result-card">
                  <div className="result-label">3-Year Projection</div>
                  <div className="result-value" id="threeYearRevenue">
                    Rs 0
                  </div>
                  <div className="result-subtext">Total revenue</div>
                </div>
                <div className="result-card">
                  <div className="result-label">Break-even Units</div>
                  <div className="result-value" id="breakEvenUnits">
                    0
                  </div>
                  <div className="result-subtext">kWh to recover cost</div>
                </div>
                <div className="result-card">
                  <div className="result-label">Average Daily Hours</div>
                  <div className="result-value" id="avgDailyHours">
                    0
                  </div>
                  <div className="result-subtext">Per module</div>
                </div>
                <div className="result-card">
                  <div className="result-label">Annual ROI %</div>
                  <div className="result-value" id="roiPercentage">
                    0%
                  </div>
                  <div className="result-subtext">Return percentage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End 3.3 kWh Tab */}
        {/* 7 kWh Tab Content */}
        <div id="tab-7kWh" className="tab-content">
          <div className="dashboard">
            {/* Input Card for 7kWh */}
            <div className="card">
              <div className="card-header">
                📊 Investment Parameters (7 kWh)
              </div>
              <div className="input-group">
                <label htmlFor="baseChargerCost7">
                  Base Charger Cost (1 Charger)
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">Rs</span>
                  <input
                    type="number"
                    id="baseChargerCost7"
                    defaultValue={200000}
                    min={0}
                    step={1000}
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="moduleCost7">
                  Additional Module Cost (1 Charger)
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">Rs</span>
                  <input
                    type="number"
                    id="moduleCost7"
                    defaultValue={150000}
                    min={0}
                    step={1000}
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="marginPerUnit7">Margin Per Unit (Rs/kWh)</label>
                <div className="input-wrapper">
                  <span className="input-prefix">Rs</span>
                  <input
                    type="number"
                    id="marginPerUnit7"
                    defaultValue={5}
                    min={0}
                    step="0.5"
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="avgConsumption7">
                  Average Consumption Per Hour (kWh)
                </label>
                <div className="input-wrapper">
                  <span className="input-prefix">⚡</span>
                  <input
                    type="number"
                    id="avgConsumption7"
                    defaultValue={1}
                    min="0.1"
                    max={7}
                    step="0.1"
                  />
                </div>
              </div>
              <div className="chargers-section">
                <div style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#333",
                      display: "block",
                      marginBottom: 15,
                    }}
                  >
                    🔌 Base Charger (1 Charger)
                  </label>
                  <div
                    className="charger-module"
                    style={{ borderLeftColor: "#28a745" }}
                  >
                    <div className="input-group" style={{ marginBottom: 0 }}>
                      <label>Average Usage Per Day (Hours)</label>
                      <div className="input-wrapper">
                        <span className="input-prefix">⏱</span>
                        <input
                          type="number"
                          id="baseChargerUsage7"
                          defaultValue={10}
                          min={0}
                          max={24}
                          step="0.5"
                          data-inline-onchange="calculateROI7()"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  <label
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#333",
                    }}
                  >
                    📦 Additional Modules (Each = 1 Charger)
                  </label>
                  <span
                    style={{ fontSize: "0.85rem", color: "#666" }}
                    id="totalModulesCount7"
                  >
                    0 Modules
                  </span>
                </div>
                <div id="chargersContainer7">
                  {/* Additional modules will be added here */}
                </div>
                <button
                  className="add-charger-btn"
                  data-inline-onclick="addCharger7()"
                >
                  + Add Another Module (1 Charger)
                </button>
              </div>
              <button
                className="calculate-btn"
                data-inline-onclick="calculateROI7()"
              >
                Calculate ROI
              </button>
              <div className="assumptions">
                <h3>📌 Assumptions</h3>
                <ul>
                  <li>Base charger: 1 charger unit</li>
                  <li>Each additional module: 1 charger</li>
                  <li>Operating days: 365 days per year</li>
                  <li>Charger capacity: 7 kWh</li>
                  <li>Currency: PKR (Pakistani Rupee)</li>
                </ul>
              </div>
            </div>
            {/* Results Card for 7kWh */}
            <div className="card">
              <div className="card-header">
                💰 Financial Projections (7 kWh)
              </div>
              <div id="resultsContainer7" className="hidden">
                <div className="results-grid">
                  <div className="result-card">
                    <div className="result-label">Total Investment</div>
                    <div className="result-value" id="totalInvestment7">
                      Rs 0
                    </div>
                    <div className="result-subtext">All modules</div>
                  </div>
                  <div className="result-card">
                    <div className="result-label">Annual Revenue</div>
                    <div className="result-value" id="annualRevenue7">
                      Rs 0
                    </div>
                    <div className="result-subtext">Per year</div>
                  </div>
                  <div className="result-card">
                    <div className="result-label">Monthly Revenue</div>
                    <div className="result-value" id="monthlyRevenue7">
                      Rs 0
                    </div>
                    <div className="result-subtext">Per month</div>
                  </div>
                  <div className="result-card">
                    <div className="result-label">Daily Revenue</div>
                    <div className="result-value" id="dailyRevenue7">
                      Rs 0
                    </div>
                    <div className="result-subtext">Per day</div>
                  </div>
                  <div className="result-card">
                    <div className="result-label">Total Units/Year</div>
                    <div className="result-value" id="totalUnits7">
                      0
                    </div>
                    <div className="result-subtext">kWh consumed</div>
                  </div>
                  <div className="result-card">
                    <div className="result-label">Additional Modules</div>
                    <div className="result-value" id="totalModules7">
                      0
                    </div>
                    <div className="result-subtext">+ 1 Base charger</div>
                  </div>
                  <div className="result-card">
                    <div className="result-label">Total Chargers</div>
                    <div className="result-value" id="totalChargersUnits7">
                      1
                    </div>
                    <div className="result-subtext">All units</div>
                  </div>
                  <div className="highlight-card">
                    <div className="result-label">Payback Period</div>
                    <div className="result-value" id="paybackPeriod7">
                      0 Months
                    </div>
                    <div className="result-subtext">
                      Time to recover investment
                    </div>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="chart-title">📈 Revenue Breakdown</div>
                  <ul className="breakdown-list">
                    <li className="breakdown-item">
                      <span>Investment Required</span>
                      <span id="investmentBreakdown7">Rs 200,000</span>
                    </li>
                    <li className="breakdown-item">
                      <span>Annual Revenue</span>
                      <span id="annualRevenueBreakdown7">Rs 0</span>
                    </li>
                    <li className="breakdown-item">
                      <span>5-Year Revenue</span>
                      <span id="fiveYearRevenue7">Rs 0</span>
                    </li>
                    <li className="breakdown-item">
                      <span>5-Year Net Profit</span>
                      <span id="fiveYearProfit7">Rs 0</span>
                    </li>
                  </ul>
                </div>
                <div className="chart-container">
                  <div className="chart-title">🎯 ROI Progress</div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      id="roiProgress7"
                      style={{ width: "0%" }}
                    >
                      0% ROI
                    </div>
                  </div>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#666",
                      fontSize: "0.9rem",
                      marginTop: 10,
                    }}
                  >
                    Annual Return on Investment
                  </p>
                </div>
              </div>
              <div
                id="noResults7"
                style={{ textAlign: "center", color: "#999", padding: 40 }}
              >
                <svg
                  width={100}
                  height={100}
                  viewBox="0 0 100 100"
                  style={{ opacity: "0.3", marginBottom: 20 }}
                >
                  <circle
                    cx={50}
                    cy={50}
                    r={40}
                    stroke="#10b981"
                    strokeWidth={3}
                    fill="none"
                  />
                  <text
                    x={50}
                    y={60}
                    fontSize={35}
                    textAnchor="middle"
                    fill="#10b981"
                  >
                    Rs
                  </text>
                </svg>
                <p style={{ fontSize: "1.1rem" }}>
                  Enter your parameters and click Calculate to see results
                </p>
              </div>
            </div>
          </div>
          {/* Additional Insights Card for 7kWh */}
          <div className="card full-width-card hidden" id="insightsCard7">
            <div className="card-header">💡 Investment Insights (7 kWh)</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: 20,
              }}
            >
              <div className="result-card">
                <div className="result-label">3-Year Projection</div>
                <div className="result-value" id="threeYearRevenue7">
                  Rs 0
                </div>
                <div className="result-subtext">Total revenue</div>
              </div>
              <div className="result-card">
                <div className="result-label">Break-even Units</div>
                <div className="result-value" id="breakEvenUnits7">
                  0
                </div>
                <div className="result-subtext">kWh to recover cost</div>
              </div>
              <div className="result-card">
                <div className="result-label">Average Daily Hours</div>
                <div className="result-value" id="avgDailyHours7">
                  0
                </div>
                <div className="result-subtext">Per module</div>
              </div>
              <div className="result-card">
                <div className="result-label">Annual ROI %</div>
                <div className="result-value" id="roiPercentage7">
                  0%
                </div>
                <div className="result-subtext">Return percentage</div>
              </div>
            </div>
          </div>
        </div>
        {/* End 7 kWh Tab */}
      </div>
    </>
  );
}
