module.exports = {
	"testEnvironment": 'node',
	"coverageReporters": ['json', 'lcovonly', 'text', 'clover'],
    "setupFilesAfterEnv": [
        "<rootDir>/jest.setup.js"
    ],
    "transform": { "^.+\\.jsx?$": "babel-jest" }
}