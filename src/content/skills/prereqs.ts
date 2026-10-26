/**
 * Prerequisites between skills, written by hand for the subjects where order
 * matters most: math 1–6, algebra 7–12, geometry 7–12 and physics 7–12.
 *
 * A skill is a unit of a course: `<courseId>.u<n>` (see ./index.ts). When a
 * skill is listed here, its list is the complete set of prerequisites; every
 * other skill simply needs the previous unit of its own course.
 * `npm run content:check` makes sure every id exists, no prerequisite is from a
 * later grade and there are no cycles.
 */
export const prerequisites: Record<string, string[]> = {
  /* Math 1 */
  "math-1.u1": [], // Numbers from 1 to 10
  "math-1.u2": ["math-1.u1"], // Addition and subtraction within 10
  "math-1.u3": ["math-1.u1"], // Numbers from 11 to 20
  "math-1.u4": ["math-1.u2", "math-1.u3"], // Addition and subtraction within 20
  "math-1.u5": ["math-1.u2"], // Word problems
  "math-1.u6": ["math-1.u1"], // Shapes, time and measurement

  /* Math 2 */
  "math-2.u1": ["math-1.u3"], // Numbers to 100
  "math-2.u2": ["math-2.u1", "math-1.u4"], // Oral addition and subtraction
  "math-2.u3": ["math-2.u2"], // Written addition and subtraction
  "math-2.u4": ["math-2.u2"], // Multiplication and division
  "math-2.u5": ["math-2.u2", "math-1.u6"], // Measurement
  "math-2.u6": ["math-1.u6"], // Geometry and review

  /* Math 3 */
  "math-3.u1": ["math-2.u4"], // The multiplication table
  "math-3.u2": ["math-3.u1"], // Out-of-table multiplication and division
  "math-3.u3": ["math-2.u1"], // Numbers to 1000
  "math-3.u4": ["math-3.u3", "math-2.u3", "math-3.u2"], // Operations with three-digit numbers
  "math-3.u5": ["math-3.u1", "math-2.u6"], // Fractions and area
  "math-3.u6": ["math-3.u2", "math-2.u5"], // Problems and quantities

  /* Math 4 */
  "math-4.u1": ["math-3.u3"], // Multi-digit numbers
  "math-4.u2": ["math-4.u1", "math-3.u4"], // Addition and subtraction of multi-digit numbers
  "math-4.u3": ["math-4.u1", "math-3.u2"], // Multiplication and division by a one-digit number
  "math-4.u4": ["math-4.u3"], // Multiplication and division by two- and three-digit numbers
  "math-4.u5": ["math-4.u3", "math-3.u6"], // Speed, time and distance
  "math-4.u6": ["math-3.u5"], // Geometry, data and review

  /* Math 5 */
  "math-5.u1": ["math-4.u1"], // Natural numbers
  "math-5.u2": ["math-5.u1", "math-4.u2", "math-4.u4"], // Operations with natural numbers
  "math-5.u3": ["math-5.u2"], // Divisibility
  "math-5.u4": ["math-5.u3", "math-3.u5"], // Common fractions
  "math-5.u5": ["math-5.u1", "math-5.u4"], // Decimal fractions
  "math-5.u6": ["math-5.u5"], // Percentages
  "math-5.u7": ["math-4.u6"], // Geometry basics

  /* Math 6 */
  "math-6.u1": ["math-5.u3", "math-5.u4", "math-5.u5"], // Fractions: review and extension
  "math-6.u2": ["math-6.u1", "math-5.u6"], // Ratios and proportions
  "math-6.u3": ["math-5.u1", "math-5.u5"], // Positive and negative numbers
  "math-6.u4": ["math-6.u3", "math-6.u1"], // Operations with rational numbers
  "math-6.u5": ["math-6.u4", "math-5.u2"], // Expressions and equations
  "math-6.u6": ["math-6.u3", "math-5.u7"], // Coordinates and geometry

  /* Algebra 7 */
  "algebra-7.u1": ["math-6.u5"], // Expressions and identities
  "algebra-7.u2": ["algebra-7.u1", "math-6.u5"], // Linear equations in one variable
  "algebra-7.u3": ["algebra-7.u2", "math-6.u6"], // Functions
  "algebra-7.u4": ["algebra-7.u1", "math-5.u1"], // Powers with natural exponents
  "algebra-7.u5": ["algebra-7.u4"], // Polynomials
  "algebra-7.u6": ["algebra-7.u5"], // Abridged multiplication formulas
  "algebra-7.u7": ["algebra-7.u2", "algebra-7.u3"], // Systems of linear equations

  /* Algebra 8 */
  "algebra-8.u1": ["algebra-7.u6", "math-6.u1"], // Rational fractions
  "algebra-8.u2": ["algebra-7.u4"], // Square roots
  "algebra-8.u3": ["algebra-8.u2", "algebra-7.u6"], // Quadratic equations
  "algebra-8.u4": ["algebra-7.u2"], // Inequalities
  "algebra-8.u5": ["algebra-7.u4", "algebra-8.u1"], // Integer exponents and statistics

  /* Algebra 9 */
  "algebra-9.u1": ["algebra-7.u3", "algebra-8.u4"], // Functions and their properties
  "algebra-9.u2": ["algebra-9.u1", "algebra-8.u3"], // The quadratic function
  "algebra-9.u3": ["algebra-8.u1", "algebra-8.u3", "algebra-8.u4"], // Equations and inequalities in one variable
  "algebra-9.u4": ["algebra-7.u7", "algebra-9.u2"], // Equations and inequalities in two variables
  "algebra-9.u5": ["algebra-7.u2", "algebra-7.u4"], // Progressions
  "algebra-9.u6": ["math-6.u1"], // Elements of combinatorics and probability

  /* Algebra 10 */
  "algebra-10.u1": ["algebra-8.u2", "algebra-8.u5", "algebra-9.u2"], // Real numbers and powers
  "algebra-10.u2": ["geometry-9.u3"], // Trigonometric functions
  "algebra-10.u3": ["algebra-10.u2"], // Trigonometric formulas
  "algebra-10.u4": ["algebra-10.u3", "algebra-9.u1"], // Graphs of trigonometric functions
  "algebra-10.u5": ["algebra-10.u4", "algebra-9.u3"], // Trigonometric equations and inequalities
  "algebra-10.u6": ["algebra-9.u1", "algebra-9.u5"], // Introduction to analysis

  /* Algebra 11 */
  "algebra-11.u1": ["algebra-10.u6", "algebra-10.u3"], // Derivative
  "algebra-11.u2": ["algebra-11.u1"], // Applications of the derivative
  "algebra-11.u3": ["algebra-10.u1"], // Exponential function
  "algebra-11.u4": ["algebra-11.u3"], // Logarithms
  "algebra-11.u5": ["algebra-11.u1"], // Integral
  "algebra-11.u6": ["algebra-9.u6"], // Combinatorics, probability and statistics

  /* Algebra 12 */
  "algebra-12.u1": ["algebra-8.u3", "algebra-10.u3"], // Complex numbers
  "algebra-12.u2": ["algebra-7.u5", "algebra-8.u3"], // Polynomials and equations of higher degree
  "algebra-12.u3": ["algebra-9.u2", "algebra-9.u3"], // Equations and inequalities with parameters
  "algebra-12.u4": ["algebra-11.u2", "algebra-11.u5"], // Deeper analysis
  "algebra-12.u5": ["algebra-10.u5", "algebra-11.u2", "algebra-11.u4"], // Exam preparation

  /* Geometry 7 */
  "geometry-7.u1": ["math-5.u7"], // Basic geometric concepts
  "geometry-7.u2": ["geometry-7.u1"], // Triangles
  "geometry-7.u3": ["geometry-7.u1"], // Parallel lines
  "geometry-7.u4": ["geometry-7.u2", "geometry-7.u3"], // Relations between sides and angles of a triangle

  /* Geometry 8 */
  "geometry-8.u1": ["geometry-7.u4"], // Quadrilaterals
  "geometry-8.u2": ["geometry-8.u1", "algebra-8.u2"], // Area (Pythagoras needs square roots)
  "geometry-8.u3": ["geometry-8.u1", "math-6.u2"], // Similar triangles
  "geometry-8.u4": ["geometry-7.u2", "geometry-8.u3"], // Circle

  /* Geometry 9 */
  "geometry-9.u1": ["geometry-8.u1"], // Vectors
  "geometry-9.u2": ["geometry-9.u1", "geometry-8.u2", "algebra-7.u3"], // Coordinate method
  "geometry-9.u3": ["geometry-8.u3", "geometry-9.u1"], // Relations between the sides and the angles of a triangle
  "geometry-9.u4": ["geometry-8.u4", "math-6.u2"], // The length of a circle and the area of a disc
  "geometry-9.u5": ["geometry-8.u1", "geometry-9.u4"], // Motions and an introduction to solids

  /* Geometry 10 */
  "geometry-10.u1": ["geometry-9.u5"], // Axioms of stereometry
  "geometry-10.u2": ["geometry-10.u1", "geometry-7.u3"], // Parallelism in space
  "geometry-10.u3": ["geometry-10.u2", "geometry-8.u2"], // Perpendicularity in space
  "geometry-10.u4": ["geometry-10.u3", "geometry-9.u5"], // Polyhedra
  "geometry-10.u5": ["geometry-10.u2", "geometry-9.u1"], // Vectors in space

  /* Geometry 11 */
  "geometry-11.u1": ["geometry-10.u5", "geometry-9.u2"], // Coordinate method in space
  "geometry-11.u2": ["geometry-10.u3", "geometry-9.u4"], // Cylinder, cone and ball
  "geometry-11.u3": ["geometry-10.u4", "geometry-11.u2", "algebra-11.u5"], // Volumes

  /* Geometry 12 */
  "geometry-12.u1": ["geometry-10.u4", "geometry-11.u2"], // Combinations of solids
  "geometry-12.u2": ["geometry-10.u3", "geometry-11.u1"], // Distances and angles in space
  "geometry-12.u3": ["geometry-8.u4", "geometry-9.u3", "geometry-11.u3"], // Planimetry review

  /* Physics 7 */
  "physics-7.u1": ["math-5.u5"], // Introduction to physics (measurements need decimals)
  "physics-7.u2": ["physics-7.u1"], // Structure of matter
  "physics-7.u3": ["physics-7.u1", "math-6.u2"], // Motion and interaction of bodies (speed and density are ratios)
  "physics-7.u4": ["physics-7.u3"], // Pressure
  "physics-7.u5": ["physics-7.u3"], // Work, power, energy

  /* Physics 8 */
  "physics-8.u1": ["physics-7.u2", "physics-7.u5"], // Thermal phenomena
  "physics-8.u2": ["physics-7.u2", "algebra-7.u1"], // Electric phenomena
  "physics-8.u3": ["physics-8.u2"], // Electromagnetic phenomena
  "physics-8.u4": ["physics-7.u1", "geometry-7.u1"], // Light phenomena

  /* Physics 9 */
  "physics-9.u1": ["physics-7.u3", "algebra-7.u3"], // Kinematics
  "physics-9.u2": ["physics-9.u1"], // Dynamics
  "physics-9.u3": ["physics-9.u2"], // Oscillations and waves
  "physics-9.u4": ["physics-8.u3", "physics-9.u3"], // Electromagnetic field
  "physics-9.u5": ["physics-8.u2"], // Atom and nucleus

  /* Physics 10 */
  "physics-10.u1": ["physics-9.u1", "physics-9.u2", "geometry-9.u1"], // Kinematics and dynamics
  "physics-10.u2": ["physics-8.u1", "physics-7.u4"], // Molecular physics
  "physics-10.u3": ["physics-10.u2"], // Thermodynamics
  "physics-10.u4": ["physics-8.u2", "geometry-9.u1"], // Electrostatics
  "physics-10.u5": ["physics-8.u2", "physics-10.u4"], // Direct current

  /* Physics 11 */
  "physics-11.u1": ["physics-9.u4", "physics-10.u5"], // Magnetic field and induction
  "physics-11.u2": ["physics-9.u3", "physics-11.u1", "algebra-10.u4"], // Oscillations and alternating current
  "physics-11.u3": ["physics-11.u2"], // Waves
  "physics-11.u4": ["physics-8.u4", "physics-11.u3"], // Optics
  "physics-11.u5": ["physics-9.u5", "physics-11.u4"], // Relativity and quantum physics

  /* Physics 12 */
  "physics-12.u1": ["physics-9.u5", "physics-11.u5", "algebra-11.u3"], // Nuclear physics (decay law is exponential)
  "physics-12.u2": ["physics-12.u1"], // Elementary particles
  "physics-12.u3": ["physics-9.u2", "physics-12.u1"], // Astrophysics and cosmology
  "physics-12.u4": ["physics-10.u5", "physics-11.u2"], // Physics and technology
  "physics-12.u5": ["physics-10.u1", "physics-10.u3", "physics-11.u4", "physics-12.u1"], // Exam review
};
