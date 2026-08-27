const lessonsData = [
  {
    number: "01",
    title: "Foundations of AI & Machine Learning",
    lessons: [
      {
        title: "What is Artificial Intelligence?",
        lesson: "Lesson 01",
        duration: "50 Minutes",
        icon: "/assets/ai-icon1.svg",
        content: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are designed to think and act like humans. It allows computers to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.

🧠 Core Areas of AI:
- **Natural Language Processing (NLP)**: Understanding and generating human language.
- **Computer Vision**: Interpreting visual data from the world.
- **Expert Systems**: Emulating decision-making of a human expert.
- **Robotics**: Using AI in mechanical agents.
- **Planning & Optimization**: Goal-based decision logic.

🔍 Real-Life Examples:
- Voice Assistants (e.g., Siri, Alexa)
- Google Translate
- Self-driving cars (Tesla)
- Fraud Detection Systems
- Chatbots in customer service

📌 Key Insight:
AI can be narrow (specific tasks) or general (broad human-level capabilities). Most systems today are **narrow AI**.

🔗 Learn More:
- https://www.ibm.com/cloud/learn/what-is-artificial-intelligence
- https://en.wikipedia.org/wiki/Artificial_intelligence`,
      },
      {
        title: "What is Machine Learning?",
        lesson: "Lesson 02",
        duration: "55 Minutes",
        icon: "/assets/ai-icon2.svg",
        content: `Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data to improve their performance over time without being explicitly programmed.

📘 Definition:
> "A computer program is said to learn from experience E with respect to some task T and performance measure P if its performance at task T, as measured by P, improves with experience E." — Tom Mitchell

🧰 Types of Machine Learning:
- **Supervised Learning**: Trained on labeled data (e.g., email spam detection).
- **Unsupervised Learning**: Finds patterns in unlabeled data (e.g., customer segmentation).
- **Reinforcement Learning**: Learns actions based on rewards and penalties (e.g., AlphaGo).

🧠 Why It Matters:
ML powers many intelligent applications:
- Netflix recommendations
- Personalized marketing
- Voice recognition in smartphones
- Predictive analytics in healthcare

📌 Key Insight:
ML learns from patterns in data rather than rules, making it powerful for tasks that are hard to explicitly program.

🔗 Learn More:
- https://www.expert.ai/blog/machine-learning-definition/
- https://www.geeksforgeeks.org/machine-learning/`,
      },
      {
        title: "AI vs ML vs Deep Learning",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/ai-icon3.svg",
        content: `🤖 AI, ML, and Deep Learning (DL) are often used interchangeably, but they represent different concepts in the field of intelligent systems.

📊 Key Differences:
- **AI (Artificial Intelligence)**: The broader concept of machines mimicking human behavior.
- **ML (Machine Learning)**: A subset of AI that uses statistical methods to learn from data.
- **DL (Deep Learning)**: A subset of ML based on artificial neural networks with multiple layers (deep networks).

🧪 Analogy:
Imagine AI is the entire field of medicine, ML is internal medicine, and DL is cardiology — a highly specialized area.

🔍 Visual Representation:
AI ⊃ ML ⊃ DL

💡 Deep Learning Examples:
- Image classification (e.g., cats vs. dogs)
- Natural language translation
- Deepfake generation

📌 Tip:
Use traditional ML for structured data and deep learning for unstructured data (like images and audio).

🔗 Resources:
- https://www.simplilearn.com/tutorials/deep-learning-tutorial/ai-vs-ml-vs-dl
- https://www.analyticsvidhya.com/blog/2017/04/introduction-deep-learning/`,
      },
    ],
  },

  {
    number: "02",
    title: "Supervised & Unsupervised Learning",
    lessons: [
      {
        title: "Supervised Learning",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/ai-icon4.svg",
        content: `Supervised learning is a type of Machine Learning where the model is trained on **labeled data** — meaning both input and correct output are provided.

📘 Example:
If you’re training an email spam filter:
- Input: Email content
- Output: “Spam” or “Not Spam”

🧠 Algorithms Used:
- **Linear Regression**: Predict continuous values
- **Logistic Regression**: Binary classification
- **Decision Trees & Random Forests**
- **Support Vector Machines (SVM)**
- **K-Nearest Neighbors (KNN)**

🔍 Common Use Cases:
- Fraud detection
- Predicting stock prices
- Diagnosing diseases from symptoms
- Email classification

🧪 Sample Code (Scikit-learn):
\`\`\`python
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
\`\`\`

📌 Key Concept:
The model learns to map inputs (features) to outputs (labels) by minimizing prediction error.

🔗 Learn More:
- https://scikit-learn.org/stable/supervised_learning.html
- https://developers.google.com/machine-learning/crash-course/supervised-learning`,
      },
      {
        title: "Unsupervised Learning",
        lesson: "Lesson 02",
        duration: "1 Hour",
        icon: "/assets/ai-icon5.svg",
        content: `Unsupervised learning deals with **unlabeled data** — the model tries to find hidden patterns or groupings in the data.

📘 Example:
Grouping customers into segments based on purchasing behavior (without predefined labels).

🧠 Key Techniques:
- **Clustering** (e.g., K-Means, DBSCAN)
- **Dimensionality Reduction** (e.g., PCA, t-SNE)
- **Anomaly Detection**

🔍 Common Use Cases:
- Market segmentation
- Recommender systems
- Social network analysis
- Detecting unusual network traffic (security)

🧪 Sample Code (K-Means):
\`\`\`python
from sklearn.cluster import KMeans
model = KMeans(n_clusters=3)
model.fit(data)
labels = model.predict(data)
\`\`\`

📌 Insight:
Since there are no labels, unsupervised learning is more exploratory. It's often used for understanding the data structure or preprocessing.

🔗 Explore:
- https://scikit-learn.org/stable/modules/clustering.html
- https://towardsdatascience.com/introduction-to-unsupervised-learning-4e20c0b0d2b0`,
      },
      {
        title: "Key Differences & When to Use What",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/ai-icon6.svg",
        content: `Choosing between supervised and unsupervised learning depends on the **availability of labeled data** and the **goal** of the task.

📊 Comparison Table:

| Feature            | Supervised Learning       | Unsupervised Learning         |
|--------------------|---------------------------|-------------------------------|
| Data               | Labeled                   | Unlabeled                     |
| Goal               | Predict outcomes          | Discover patterns             |
| Output             | Known (classes/values)    | Unknown (clusters/groups)     |
| Complexity         | Typically higher accuracy | Often exploratory             |
| Examples           | Email spam detection, price prediction | Market segmentation, anomaly detection |

🧠 When to Use:
- ✅ **Supervised**: You know what you're trying to predict.
- ✅ **Unsupervised**: You're exploring data for structure or relationships.

💡 Real-World Analogy:
- Supervised: A student learning with an answer key.
- Unsupervised: A student discovering patterns on their own without answers.

🔗 Learn More:
- https://www.geeksforgeeks.org/difference-between-supervised-and-unsupervised-learning/
- https://www.educative.io/answers/what-is-the-difference-between-supervised-and-unsupervised-learning`,
      },
    ],
  },

  {
    number: "03",
    title: "Regression & Classification Techniques",
    lessons: [
      {
        title: "Linear & Logistic Regression",
        lesson: "Lesson 01",
        duration: "1 Hour",
        icon: "/assets/ai-icon7.svg",
        content: `Regression techniques help predict **continuous outcomes**, while classification predicts **discrete labels**.

### 📈 Linear Regression:
- Predicts a **numeric value** based on one or more input features.
- Equation: \`y = mx + b\` (for simple linear regression)
- Objective: Minimize the Mean Squared Error (MSE)

🧪 Example:
Predicting house prices based on size:
\`\`\`python
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
model.predict([[1200]])  # Predict price for 1200 sqft
\`\`\`

---

### 🔒 Logistic Regression:
- Used for **binary classification** problems (e.g., spam or not spam).
- Outputs a **probability** (between 0 and 1), then maps it to a class.
- Uses the **sigmoid function**: \`1 / (1 + e^-z)\`

🧪 Example:
\`\`\`python
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(X_train, y_train)
model.predict([[5.1, 3.5, 1.4, 0.2]])
\`\`\`

📌 Use Linear Regression for:
- Predicting salaries, temperatures, prices, etc.

📌 Use Logistic Regression for:
- Binary outcomes like Yes/No, True/False, 0/1.

🔗 Resources:
- https://scikit-learn.org/stable/modules/linear_model.html
- https://towardsdatascience.com/logistic-regression-detailed-overview-46c4da4303bc`,
      },
      {
        title: "Classification Algorithms (KNN, SVM, Decision Trees)",
        lesson: "Lesson 02",
        duration: "1 Hour 15 Minutes",
        icon: "/assets/ai-icon8.svg",
        content: `Classification algorithms are used to **categorize data into classes**.

### 📍 1. K-Nearest Neighbors (KNN)
- Classifies data based on **closest neighbors**.
- Lazy learner (no model is trained ahead).
- Sensitive to feature scaling and value of **K**.

🧪 Example:
\`\`\`python
from sklearn.neighbors import KNeighborsClassifier
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)
model.predict(X_test)
\`\`\`

---

### 📍 2. Support Vector Machines (SVM)
- Finds the **optimal hyperplane** to separate classes.
- Works well in high-dimensional spaces.
- Uses **kernel trick** to handle non-linearly separable data.

🧪 Example:
\`\`\`python
from sklearn.svm import SVC
model = SVC(kernel='linear')
model.fit(X_train, y_train)
\`\`\`

---

### 📍 3. Decision Trees
- Splits data based on **feature conditions**.
- Easy to interpret, but prone to overfitting.
- Can be extended to **Random Forests** for better accuracy.

🧪 Example:
\`\`\`python
from sklearn.tree import DecisionTreeClassifier
model = DecisionTreeClassifier()
model.fit(X_train, y_train)
\`\`\`

🧠 Key Factors:
- Accuracy
- Interpretability
- Training speed

🔗 Learn More:
- https://scikit-learn.org/stable/modules/neighbors.html
- https://scikit-learn.org/stable/modules/svm.html
- https://scikit-learn.org/stable/modules/tree.html`,
      },
      {
        title: "Evaluating Models (Accuracy, Precision, Recall)",
        lesson: "Lesson 03",
        duration: "45 Minutes",
        icon: "/assets/ai-icon9.svg",
        content: `Evaluating ML models is critical to ensure **real-world performance**.

### 📊 Key Metrics:

- **Accuracy**: Correct predictions / total predictions  
  → Great when classes are balanced.

- **Precision**: True Positives / (True Positives + False Positives)  
  → Focuses on **how many selected items were relevant**.

- **Recall**: True Positives / (True Positives + False Negatives)  
  → Focuses on **how many relevant items were selected**.

- **F1 Score**: Harmonic mean of precision and recall  
  → Useful for imbalanced datasets.

---

🧪 Example Code:
\`\`\`python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

accuracy = accuracy_score(y_true, y_pred)
precision = precision_score(y_true, y_pred)
recall = recall_score(y_true, y_pred)
f1 = f1_score(y_true, y_pred)
\`\`\`

### 📉 Confusion Matrix:
- Helps visualize performance:
  |           | Predicted Positive | Predicted Negative |
  |-----------|--------------------|--------------------|
  | Actual +ve| True Positive (TP) | False Negative (FN)|
  | Actual -ve| False Positive (FP)| True Negative (TN) |

📌 Best Practices:
- Use multiple metrics to evaluate models
- Visualize using confusion matrix or ROC curve

🔗 Resources:
- https://scikit-learn.org/stable/modules/model_evaluation.html
- https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall`,
      },
    ],
  },
  {
  number: "04",
  title: "Neural Networks & Deep Learning",
  lessons: [
    {
      title: "Introduction to Neural Networks",
      lesson: "Lesson 01",
      duration: "1 Hour",
      icon: "/assets/ai-icon10.svg",
      content: `Neural Networks are at the core of modern AI. They mimic how the human brain processes information using **neurons**, **layers**, and **activation functions**.

### 🧠 Structure of a Neural Network:
- **Input Layer**: Takes features as input.
- **Hidden Layers**: Perform transformations via weighted sums and activation functions.
- **Output Layer**: Produces predictions.

### 📌 Forward Propagation:
- Data moves **forward** through the network.
- Each node computes: \`output = activation(weighted_sum)\`

🧮 Example Neuron Output:
\`\`\`python
import numpy as np
def sigmoid(x): return 1 / (1 + np.exp(-x))

inputs = np.array([0.5, 0.3])
weights = np.array([0.4, 0.6])
output = sigmoid(np.dot(inputs, weights))
\`\`\`

---

### 🔄 Backpropagation:
- Calculates **error** at output, propagates it **backward** to adjust weights using **gradient descent**.
- This is how the network **learns**.

📌 Key Concepts:
- Activation Functions: Sigmoid, ReLU, Tanh
- Loss Functions: Mean Squared Error, Cross Entropy
- Optimizers: SGD, Adam

🔗 Learn More:
- https://cs231n.github.io/neural-networks-1/
- https://www.deeplearning.ai/short-courses/neural-networks/
`,
    },
    {
      title: "Activation Functions & Loss Functions",
      lesson: "Lesson 02",
      duration: "50 Minutes",
      icon: "/assets/ai-icon11.svg",
      content: `Activation and loss functions control how a neural network **learns** and **predicts**.

---

### ⚡ Activation Functions:

Used in hidden layers to introduce **non-linearity**:

- **ReLU (Rectified Linear Unit)**:
  \`f(x) = max(0, x)\` — Fast, widely used in deep nets.

- **Sigmoid**:
  \`f(x) = 1 / (1 + e^-x)\` — Outputs values between 0 and 1.

- **Tanh**:
  \`f(x) = (e^x - e^-x)/(e^x + e^-x)\` — Range: [-1, 1]

🧪 Example:
\`\`\`python
import torch.nn as nn
relu = nn.ReLU()
sigmoid = nn.Sigmoid()
\`\`\`

---

### 💥 Loss Functions:

Used during training to measure **error** between predicted and true values:

- **MSE (Mean Squared Error)**: Used for regression.
- **Binary Cross-Entropy**: For binary classification.
- **Categorical Cross-Entropy**: For multi-class classification.

🧪 Example:
\`\`\`python
import torch.nn as nn
loss_fn = nn.CrossEntropyLoss()
\`\`\`

📌 Choosing the right functions is **crucial** to model performance.

🔗 Docs:
- https://pytorch.org/docs/stable/nn.html#non-linear-activations
- https://towardsdatascience.com/activation-functions-neural-networks-1cbd9f8d91d6`,
    },
    {
      title: "Building a Neural Network with PyTorch",
      lesson: "Lesson 03",
      duration: "1 Hour 15 Minutes",
      icon: "/assets/ai-icon12.svg",
      content: `PyTorch is a flexible and popular deep learning library, widely used for building neural networks.

---

### 🔧 Key Components:

- **Tensors**: Multidimensional arrays (similar to NumPy arrays)
- **Model**: Inherits from \`nn.Module\`
- **Training Loop**: Runs forward + backward pass + optimizer step

🧪 Simple Example:
\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim

# Define a basic NN
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc = nn.Linear(2, 1)

    def forward(self, x):
        return torch.sigmoid(self.fc(x))

model = Net()
criterion = nn.BCELoss()
optimizer = optim.SGD(model.parameters(), lr=0.01)

# Dummy training loop
for epoch in range(100):
    output = model(torch.tensor([[0.5, 0.3]]))
    loss = criterion(output, torch.tensor([[1.0]]))
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
\`\`\`

---

### 🧠 Concepts:
- Autograd: Automatic gradient calculation
- Optimizers: SGD, Adam, RMSprop
- Epochs & Batches: Control training cycles

🔗 Learn PyTorch:
- https://pytorch.org/tutorials/beginner/nn_tutorial.html
- https://www.learnpytorch.io/

📌 Pro Tip:
Use GPU acceleration with 'model.to('cuda') 'for faster training on large models'.
`,
    }
  ]
}
,

  {
  number: "05",
  title: "Model Evaluation & Deployment",
  lessons: [
    {
      title: "Evaluating ML Models",
      lesson: "Lesson 01",
      duration: "1 Hour",
      icon: "/assets/ai-icon13.svg",
      content: `Evaluating a machine learning model is crucial to ensure it performs well on **unseen data**. You need to use appropriate metrics and validation techniques based on the **type of problem** (classification, regression, etc.).

---

### 📊 Classification Metrics:

- **Accuracy**: Proportion of correct predictions
- **Precision**: True Positives / (True Positives + False Positives)
- **Recall**: True Positives / (True Positives + False Negatives)
- **F1 Score**: Harmonic mean of precision and recall
- **Confusion Matrix**: Breakdown of prediction vs actual classes

🧪 Example (using 'sklearn'):
\`\`\`python
from sklearn.metrics import classification_report, confusion_matrix
print(confusion_matrix(y_true, y_pred))
print(classification_report(y_true, y_pred))
\`\`\`

---

### 📈 Regression Metrics:

- **MSE (Mean Squared Error)**: Average squared difference between predicted and actual values
- **RMSE (Root MSE)**: Square root of MSE
- **MAE (Mean Absolute Error)**: Average absolute difference

---

### 🔍 Cross-Validation:
Used to **validate model performance** on different subsets of the dataset.

\`\`\`python
from sklearn.model_selection import cross_val_score
scores = cross_val_score(model, X, y, cv=5)
\`\`\`

📌 Always evaluate on a separate **test set** after tuning.

🔗 Learn More:
- https://scikit-learn.org/stable/modules/model_evaluation.html
- https://machinelearningmastery.com/classification-accuracy-is-not-enough-more-performance-measures/
`,
    },
    {
      title: "Model Tuning & Optimization",
      lesson: "Lesson 02",
      duration: "1 Hour",
      icon: "/assets/ai-icon14.svg",
      content: `Model tuning involves optimizing the **hyperparameters** of your machine learning models to achieve better performance.

---

### 🔧 Hyperparameter Tuning:

These are values set before training, such as:
- Learning rate
- Number of layers
- Regularization strength
- Batch size

---

### ⚙️ Techniques:

- **Grid Search**:
  Tries all possible combinations.
  \`\`\`python
  from sklearn.model_selection import GridSearchCV
  grid = GridSearchCV(model, param_grid, cv=5)
  \`\`\`

- **Random Search**:
  Samples random combinations.

- **Bayesian Optimization**:
  Uses probability to find the best parameters efficiently.

---

### 🧪 Example with GridSearchCV:
\`\`\`python
from sklearn.model_selection import GridSearchCV
params = {'n_estimators': [50, 100], 'max_depth': [3, 5]}
grid = GridSearchCV(RandomForestClassifier(), params, cv=3)
grid.fit(X_train, y_train)
\`\`\`

---

### 📌 Regularization:
Helps prevent overfitting by penalizing large weights.

- **L1 (Lasso)**: Can shrink coefficients to 0
- **L2 (Ridge)**: Shrinks coefficients smoothly

---

🔗 Resources:
- https://scikit-learn.org/stable/modules/grid_search.html
- https://optuna.org/ (advanced hyperparameter optimization library)
`,
    },
    {
      title: "Deploying Models to Production",
      lesson: "Lesson 03",
      duration: "1 Hour 15 Minutes",
      icon: "/assets/ai-icon15.svg",
      content: `Once your model performs well, the next step is **deployment** — making it available for real-world usage via an API, web app, or embedded device.

---

### 🧱 Common Deployment Stack:

- **Flask / FastAPI**: Create REST APIs for model inference
- **Docker**: Package models with dependencies
- **Cloud**: Use platforms like AWS, GCP, or Azure for hosting
- **CI/CD Pipelines**: Automate deployment and updates

---

### 🚀 Deployment with FastAPI:

\`\`\`python
from fastapi import FastAPI
import pickle
import numpy as np

app = FastAPI()
model = pickle.load(open("model.pkl", "rb"))

@app.post("/predict")
def predict(data: list[float]):
    prediction = model.predict([data])
    return {"prediction": prediction.tolist()}
\`\`\`

---

### 🐳 Dockerizing Your Model:

\`\`\`Dockerfile
FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

Then run:
\`\`\`bash
docker build -t model-api .
docker run -p 8000:8000 model-api
\`\`\`

---

### ☁️ Hosting Options:

- **Render / Railway**: Simple for beginners
- **AWS Lambda + API Gateway**: Serverless ML deployment
- **Streamlit / Gradio**: Build interactive UI for models

🔗 Learn More:
- https://fastapi.tiangolo.com/
- https://docs.docker.com/
- https://mlops.community/
`,
    }
  ]
}

];

export default lessonsData;
