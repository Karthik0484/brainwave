import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

const UnitNotes = () => {
  const { subjectName } = useParams();

  // Map URL subject names to the proper keys in our data.
  const subjectMapping = {
    // Semester 6
    "object oriented software engineering": "Object Oriented Software Engineering",
    "data warehousing": "Data Warehousing",
    "network security": "Network Security",
    "multimedia and animation": "Multimedia And Animation",
    "introduction To Industrial Engineering": "Introduction To Industrial Engineering",
    "3D Printing And Design": "3D Printing And Design",

    // Semester 1
    "professional English-1":"Professional English-1",
    "matrices and Calculus":"Matrices and Calculus",
    "enginnering Physics":"Enginnering Physics",
    "enginnering chemistry":"Enginnering chemistry",
    "problem Solving and Python Programming":"Problem Solving and Python Programming",
    "heritage of Tamils":"Heritage of Tamils"

  };

  const normalizedSubjectName =
    subjectName && subjectMapping[subjectName.toLowerCase()]
      ? subjectMapping[subjectName.toLowerCase()]
      : subjectName;

  // Sample unit notes data with syllabus, resource, and questionsResource.
  const unitNotesData = {

    // Semester 6 Subjects
    "Object Oriented Software Engineering": [
      {
        unit: "Unit 1: Software Process and Agile Development",
        syllabus: "/resources/pdf/oose_syllabus_unit1.pdf",
        resource: "/resources/pdf/oose_unit-1.pdf",
        description: "An overview of Agile methodologies and iterative development processes.",
        questionsResource: "/resources/pdf/oose_unit-1_questions.pdf"
      },
      {
        unit: "Unit 2: REQUIREMENTS ANALYSIS AND SPECIFICATION",
        syllabus: "",
        resource: "",
        description: " Accurately gather and document user needs for effective solutions.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: SOFTWARE DESIGN",
        syllabus: "",
        resource: "",
        description: "Create clear, modular architectures to guide development.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: SOFTWARE TESTING AND MAINTAINENCE",
        syllabus: "",
        resource: "",
        description: "Ensure reliability through systematic testing and ongoing updates.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: PROJECT MANAGEMENT",
        syllabus: "",
        resource: "",
        description: "Coordinate resources and schedules to deliver projects on time and within budget.",
        questionsResource: ""
      }
    ],
    "Data Warehousing": [
      {
        unit: "Unit 1: INTRODUCTION TO DATA WAREHOUSE",
        syllabus: "",
        resource: "",
        description: "Understand the basics of building data warehouses, performing ETL, and using OLAP for analysis.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: ETL AND OLAP TECHNOLOGY",
        syllabus: "",
        resource: "",
        description: "Grasp how metadata adds context and structure to data.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: META DATA,DATA MART AND PARTITION STRATEGY",
        syllabus: "",
        resource: "",
        description: "Learn to design efficient data marts and effective partitioning strategies.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: DIMENSIONAL MODELING AND SCHEMA",
        syllabus: "",
        resource: "",
        description: "Create clear, user-friendly dimensional models and schemas for analytics.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: SYSTEM AND PROCESS MANAGERS",
        syllabus: "",
        resource: "",
        description: "Master managing data systems and business processes for smooth operations.",
        questionsResource: ""
      }
    ],
    "Network Security": [
      {
        unit: "Unit 1: Introduction",
        syllabus: "",
        resource: "",
        description: "Basics of Network Security.",
        questionsResource: ""
      },
    ],
    "Multimedia And Animation": [
      {
        unit: "Unit 1: Introduction To Multimedia",
        syllabus: "",
        resource: "",
        description: "Basics of Multimedia",
        questionsResource: ""
      },
    ],
    "Introduction To Industrial Engineering": [
      {
        unit: "Unit 1: Introduction",
        syllabus: "",
        resource: "",
        description: "Basics of Industrial Engineering",
        questionsResource: ""
      },
    ],
    "3D Printing And Design": [
      {
        unit: "Unit 1: INTRODUCTION",
        syllabus: "",
        resource: "",
        description: "Gain an overview of 3D printing technology and its impact on design.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: PRINCIPLE",
        syllabus: "",
        resource: "",
        description: "Understand the core principles behind additive manufacturing.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: Learn how inkjet-based methods deposit materials in 3D printing.",
        syllabus: "",
        resource: "",
        description: "Fundamentals of heat and energy.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: LASER TECHNOLOGY",
        syllabus: "",
        resource: "",
        description: "Discover how laser systems enable precision in 3D printing.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: INDUSTRIAL APPLICATIONS",
        syllabus: "",
        resource: "",
        description: "Explore real-world applications of 3D printing in various industries.",
        questionsResource: ""
      }
    ],

    // Semester 1 subjects
    "Professional English-1" : [
      {
        unit: "Unit 1: INTRODUCTION TO EFFECTIVE COMMUNICATION",
        syllabus: "",
        resource: "",
        description: "Understands the principles of clear, concise, and impactful communication in various contexts.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: NARRATION AND SUMMATION",
        syllabus: "",
        resource: "",
        description: "Develops the ability to present information logically and summarize key points effectively.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: DESCRIPTION OF A PROCESS / PRODUCT",
        syllabus: "",
        resource: "",
        description: "Gains skills in detailing processes or products with clarity and precision.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: CLASSIFICATION AND RECOMMENDATIONS ",
        syllabus: "",
        resource: "",
        description: "Learns to categorize information systematically and provide well-reasoned suggestions.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: EXPRESSION",
        syllabus: "",
        resource: "",
        description: " Enhances the ability to convey thoughts, emotions, and ideas effectively in verbal and written forms.",
        questionsResource: ""
      }
    ],
    "Matrices and Calculus" : [
      {
        unit: "Unit 1: MATRICES",
        syllabus: "",
        resource: "",
        description: "Enables solving linear equations, transformations, and eigenvalue problems in various applications.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: DIFFERENTIAL CALCULUS ",
        syllabus: "",
        resource: "",
        description: "Helps analyze rates of change, tangents, and optimization problems in mathematical modeling.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: FUNCTIONS OF SEVERAL VARIABLES",
        syllabus: "",
        resource: "",
        description: "Facilitates understanding of multivariable systems, gradients, and optimization in 3D space.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: INTEGRAL CALCULUS",
        syllabus: "",
        resource: "",
        description: "Used for computing areas, volumes, and solving accumulation problems in physics and engineering.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: MULTIPLE INTEGRALS ",
        syllabus: "",
        resource: "",
        description: "Extends integration to higher dimensions for volume calculations and applications in physics.",
        questionsResource: ""
      }
    ],
    "Enginnering Physics" : [
      {
        unit: "Unit 1: MECHANICS",
        syllabus: "",
        resource: "",
        description: "Understands motion, forces, energy, and momentum principles governing physical systems.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: ELECTROMAGNETIC WAVES",
        syllabus: "",
        resource: "",
        description: " Learns wave propagation, polarization, reflection, and applications in communication.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: OSCILLATIONS, OPTICS AND LASERS",
        syllabus: "",
        resource: "",
        description: "Studies periodic motion, resonance, damping, and real-world applications like pendulums.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: BASIC QUANTUM MECHANICS",
        syllabus: "",
        resource: "",
        description: "Explores light behavior, image formation, and laser technology for precise applications.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: INDUSTRIAL APPLICATIONS",
        syllabus: "",
        resource: "",
        description: "Analyzes quantum behavior in materials, semiconductors, and modern technologies.",
        questionsResource: ""
      }
    ],
    "Enginnering chemistry" : [
      {
        unit: "Unit 1: WATER AND ITS TREATMENT",
        syllabus: "",
        resource: "",
        description: "Understanding purification methods to ensure safe and sustainable water usage.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: NANOCHEMISTRY",
        syllabus: "",
        resource: "",
        description: "Exploring nanoscale materials for advanced applications in medicine, electronics, and energy.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: PHASE RULE AND COMPOSITES",
        syllabus: "",
        resource: "",
        description: "Analyzing phase equilibrium and developing strong, lightweight composite materials.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: FUELS AND COMBUSTION",
        syllabus: "",
        resource: "",
        description: "Studying fuel efficiency, combustion processes, and emission control.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: ENERGY SOURCES AND STORAGE DEVICES",
        syllabus: "",
        resource: "",
        description: " Evaluating renewable and conventional energy sources along with efficient storage technologies.",
        questionsResource: ""
      }
    ],
    "Problem Solving and Python Programming" : [
      {
        unit: "Unit 1: COMPUTATIONAL THINKING AND PROBLEM SOLVING",
        syllabus: "",
        resource: "",
        description: "Develops structured problem-solving skills using abstraction, decomposition, and algorithms.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: DATA TYPES, EXPRESSIONS, STATEMENTS",
        syllabus: "",
        resource: "",
        description: "Understands different types of data (int, float, string, etc.) and their operations.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: CONTROL FLOW, FUNCTIONS, STRINGS",
        syllabus: "",
        resource: "",
        description: "Enables writing structured programs using loops, conditionals, and expressions.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: LISTS, TUPLES, DICTIONARIES",
        syllabus: "",
        resource: "",
        description: "Mastery of data structures to store, access, and manipulate collections of data.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: FILES, MODULES, PACKAGES",
        syllabus: "",
        resource: "",
        description: "Promotes code organization, reuse, and extensibility by using predefined and custom modules.",
        questionsResource: ""
      }
    ],
    "Heritage of Tamils" : [
      {
        unit: "Unit 1: LANGUAGE AND LITERATURE",
        syllabus: "",
        resource: "",
        description: "Understanding the evolution, richness, and influence of Tamil language and literature in shaping cultural identity.",
        questionsResource: ""
      },
      {
        unit: "Unit 2: HERITAGE - ROCK ART PAINTINGS TO MODERN ART-SCULPTURE",
        syllabus: "",
        resource: "",
        description: "Exploring the artistic journey from prehistoric rock art to modern sculptures, reflecting cultural and historical transitions.",
        questionsResource: ""
      },
      {
        unit: "Unit 3: FOLK AND MARTIAL ARTS",
        syllabus: "",
        resource: "",
        description: "Recognizing the significance of Tamil folk and martial arts in preserving traditions and self-defense techniques.",
        questionsResource: ""
      },
      {
        unit: "Unit 4: THINAI CONCEPT OF TAMILS",
        syllabus: "",
        resource: "",
        description: "Gaining insights into the ancient ecological classification system in Tamil literature that links geography with human life.",
        questionsResource: ""
      },
      {
        unit: "Unit 5: CONTRIBUTION OF TAMILS TO INDIAN NATIONAL MOVEMENT AND INDIAN CULTURE ",
        syllabus: "",
        resource: "",
        description: "Appreciating the role of Tamils in India’s freedom struggle and their contributions to art, philosophy, and social reforms.",
        questionsResource: ""
      }
    ],

    // Add other subjects as needed...

  };

  const notes = unitNotesData[normalizedSubjectName] || [];

  // Define button styles using blue (#1976d2) with reduced hover effects.
  const outlinedButtonStyle = {
    borderColor: "#1976d2",
    color: "#1976d2",
    transition: "transform 0.15s, box-shadow 0.15s",
    "&:hover": {
      borderColor: "#1565c0",
      color: "#1565c0",
      transform: "scale(1.02)",
      boxShadow: "0px 2px 10px rgba(25, 118, 210, 0.2)"
    }
  };

  const containedButtonStyle = {
    backgroundColor: "#1976d2",
    color: "#fff",
    transition: "transform 0.15s, box-shadow 0.15s",
    "&:hover": {
      backgroundColor: "#1565c0",
      transform: "scale(1.02)",
      boxShadow: "0px 2px 10px rgba(25, 118, 210, 0.2)"
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        {normalizedSubjectName} - Unit Wise Notes
      </Typography>
      {notes.length === 0 ? (
        <Typography variant="body1" align="center">
          No resources available for {normalizedSubjectName}.
        </Typography>
      ) : (
        <Grid container spacing={3} alignItems="stretch">
          {notes.map((note, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 450,
                  justifyContent: 'space-between'
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {note.unit}
                  </Typography>
                  {note.description && (
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {note.description}
                    </Typography>
                  )}
                </CardContent>
                {/* Syllabus Section */}
                <Box
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    mb: 1,
                    alignItems: 'stretch'
                  }}
                >
                  {note.syllabus ? (
                    <>
                      <Button
                        variant="outlined"
                        sx={outlinedButtonStyle}
                        onClick={() => window.open(note.syllabus, '_blank')}
                        fullWidth
                      >
                        View Syllabus
                      </Button>
                      <Button
                        variant="contained"
                        sx={containedButtonStyle}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = note.syllabus;
                          link.download = `${note.unit} Syllabus`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        fullWidth
                      >
                        Download Syllabus
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary" align="center">
                      Syllabus will be available soon.
                    </Typography>
                  )}
                </Box>
                {/* Resource Section */}
                <Box
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    mb: 1,
                    alignItems: 'stretch'
                  }}
                >
                  {note.resource ? (
                    <>
                      <Button
                        variant="outlined"
                        sx={outlinedButtonStyle}
                        onClick={() => window.open(note.resource, '_blank')}
                        fullWidth
                      >
                        View Notes
                      </Button>
                      <Button
                        variant="contained"
                        sx={containedButtonStyle}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = note.resource;
                          link.download = note.unit;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        fullWidth
                      >
                        Download Notes
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary" align="center">
                      Resource will be available soon.
                    </Typography>
                  )}
                </Box>
                {/* Questions Section */}
                <Box
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'stretch'
                  }}
                >
                  {note.questionsResource ? (
                    <>
                      <Button
                        variant="outlined"
                        sx={outlinedButtonStyle}
                        onClick={() => window.open(note.questionsResource, '_blank')}
                        fullWidth
                      >
                        View Important Questions
                      </Button>
                      <Button
                        variant="contained"
                        sx={containedButtonStyle}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = note.questionsResource;
                          link.download = `${note.unit} Questions`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        fullWidth
                      >
                        Download Important Questions
                      </Button>
                    </>
                  ) : (
                    <Typography variant="body2" color="textSecondary" align="center">
                      Important questions will be available soon.
                    </Typography>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UnitNotes;
