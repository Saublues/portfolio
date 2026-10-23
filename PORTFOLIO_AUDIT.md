# Portfolio Audit: Project Catalog

**Candidate:** Sausan Asma' Mufiidah  
**Core Domain:** Software Engineering transitioning to Data Analytics, Business Intelligence & Data Science  
**Institution:** Sekolah Vokasi IPB University, Bogor  

---

## 1. Flagship Projects Catalog

### 1. BCG X Data Science & Advanced Analytics Job Simulation
- **Domain:** Customer Churn Prediction & Price Sensitivity Analysis
- **Problem Statement:** SME client of PowerCo is experiencing elevated churn rate (~9.7%). Management hypothesizes that churn is primarily driven by price sensitivity and high energy tariffs.
- **Methodology & Stack:**
  - Exploratory Data Analysis (EDA) on 14,000+ SME historical energy consumption and contract data.
  - Feature Engineering: Price margin fluctuations, contract length, off-peak/peak ratio differentials.
  - Predictive Modeling: Random Forest Classifier with SMOTE & Hyperparameter tuning (evaluating ROC-AUC and Precision-Recall).
  - Feature Importance Analysis: Quantified that price sensitivity was only a secondary factor; tenure and churn timing had higher correlation.
- **Business Value / Actionable Recommendation:**
  - Advised against blanket price discounting (saving estimated margins).
  - Recommended targeted 20% discount offer only to the top 20% high-risk cohort during contract renewal windows.
- **Key Artifacts:** Churn Probability Curve, Feature Importance Chart, Executive Presentation Slide deck.

---

### 2. AgriFresh / ReKaPri (Digital Agribusiness Supply Chain & Monitoring)
- **Domain:** Data-Driven Agribusiness Platform & Price Stability Monitoring
- **Problem Statement:** Smallholder horticultural farmers face price volatility and post-harvest distribution bottlenecks due to lack of transparent market demand data.
- **Methodology & Stack:**
  - Tech Stack: Laravel, Next.js, MySQL / PostgreSQL, REST API.
  - Data Pipeline: Structured tracking of commodity transactions, harvest forecasts, and price fluctuations across regional markets in West Java.
  - Analytical Dashboard: Real-time volume throughput, price disparity indices between farm-gate and wholesale markets.
- **Business Value / Impact:**
  - Decreased distribution lag by matching cooperative volume with institutional buyers.
  - Enabled localized pricing intelligence for cooperative managers.
- **Key Artifacts:** Commodity price variance heatmaps, transaction volume trends, interactive administrative analytics.

---

### 3. ReCircle (Waste Management & Circular Economy Logistics)
- **Domain:** Reverse Logistics & Circular Waste Traceability
- **Problem Statement:** Inefficient organic and inorganic waste aggregation from households to recycling hubs, causing high collection costs and unoptimized truck routing.
- **Methodology & Stack:**
  - Tech Stack: React, Node.js/Express, MySQL, Leaflet / Spatial queries.
  - Logic: Spatial aggregation of pickup requests, volume categorization (PET, HDPE, Cardboard, Organic).
  - Reporting: Drop-off frequency metrics, collection yield rate per district.
- **Business Value / Impact:**
  - Improved pickup route efficiency by grouping nearby clusters within 2 km radius.
  - Transparent recyclable audit log for ESG / municipal stakeholders.
- **Key Artifacts:** Collection route density map, materials breakdown chart.

---

### 4. Visensa (Sensor Analytics & Environmental Monitoring)
- **Domain:** IoT Environmental Data Telemetry & Anomaly Detection
- **Problem Statement:** Industrial and agricultural microclimate monitoring requires reliable threshold detection for humidity, temperature, and soil metrics.
- **Methodology & Stack:**
  - Tech Stack: Python (Data Ingestion & Cleaning), REST API, Chart.js / Recharts.
  - Statistical Analysis: Moving average smoothing, z-score anomaly detection on time-series telemetry streams.
- **Business Value / Impact:**
  - Reduced false alarms by 35% through windowed baseline anomaly filtering.
  - Automated alert thresholds for critical environmental shifts.
- **Key Artifacts:** Time-series telemetry charts with anomaly boundary bands.

---

### 5. Tumbuh Berbagi (Philanthropy & CSR Disbursement Intelligence)
- **Domain:** Social Impact Resource Allocation
- **Problem Statement:** Disproportionate distribution of community assistance programs across sub-districts due to lack of demographic filtering.
- **Methodology & Stack:**
  - Tech Stack: Laravel, MySQL, Data Modeling, Role-Based Access Control.
  - Metrics: Beneficiary demographic mapping, disbursement velocity, program completion rates.
- **Business Value / Impact:**
  - Streamlined resource allocation to prioritize underserved kelurahan.
- **Key Artifacts:** Fund utilization breakdowns, beneficiary geographic coverage metrics.

---

### 6. Spatial / WebGIS Analysis (Bogor Region Land Use & Facility Accessibility)
- **Domain:** Geographic Information Systems (GIS) & Spatial Analytics
- **Problem Statement:** Evaluating spatial distribution of public facilities and environmental constraints in Bogor Regency.
- **Methodology & Stack:**
  - Tools: QGIS, GeoJSON, Leaflet / MapLibre, Python (GeoPandas, Shapely).
  - Methods: Buffer analysis, overlay analysis, spatial distance matrix calculation.
- **Business Value / Impact:**
  - Identified spatial service gaps where residential zones lacked healthcare / educational coverage within standard 15-minute isochrones.
- **Key Artifacts:** Chloropleth vulnerability map, service accessibility isochrone layers.
