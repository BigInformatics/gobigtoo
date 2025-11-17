# GitHub Copilot Instructions for gobig

This document provides guidelines for GitHub Copilot when working on the gobig repository - a foundational framework for applications.

## Project Overview

gobig is a foundational framework designed for building applications. As this is a core framework, code quality, maintainability, and reliability are paramount.

## CRITICAL DIRECTIVES

  - Read ARCHITECTURE.md, SECURITY.md and TESTING.md thoroughly to understand the project's structure, technologies used, and testing requirements.
  - The source code in this project is open source and will be used as a foundation for other applications. Prioritize code quality, documentation and maintainability.
  - All documentation is placed in the docs/ directory, and must be written in clear, concise language for other developers to understand and use this project.
  - Write tests for all new functionality. Aim for at least 80% test coverage.
  - Follow security best practices. Never hardcode sensitive information.
  - You may maintain a To Do list in the root of this project called TODO.md.  Keep it updated with tasks that need to be done, what you are working on, and what has been completed.

Do not skip these steps!  Do not remove them when summarizing context for future tasks.


## General Coding Standards

### Code Style
- Write clean, readable, and maintainable code
- Use meaningful variable and function names that clearly convey intent
- Keep functions focused and single-purpose
- Prefer composition over inheritance
- Follow DRY (Don't Repeat Yourself) principles
- Add comments only when necessary to explain "why" rather than "what"

### Code Organization
- Maintain a clear and logical project structure
- Group related functionality together
- Keep files focused on a single responsibility
- Use consistent naming conventions throughout the project

## Testing Requirements

### Test Coverage
- Write comprehensive unit tests for all new functionality
- Aim for high test coverage (minimum 80%)
- Include edge cases and error scenarios in tests
- Write integration tests for critical workflows

### Test Quality
- Tests should be clear, readable, and maintainable
- Use descriptive test names that explain what is being tested
- Follow the Arrange-Act-Assert (AAA) pattern
- Mock external dependencies appropriately
- Ensure tests are deterministic and can run in any order

## Documentation Standards

### Code Documentation
- Document all public APIs with clear descriptions
- Include parameter types, return types, and usage examples
- Document any non-obvious design decisions
- Keep documentation up-to-date with code changes

### README and Guides
- Maintain clear and comprehensive README files
- Provide setup and installation instructions
- Include usage examples and common scenarios
- Document any prerequisites or system requirements

## Security Guidelines

### Secure Coding Practices
- Never hardcode sensitive information (API keys, passwords, tokens)
- Use environment variables for configuration
- Validate and sanitize all user inputs
- Follow the principle of least privilege
- Use secure communication protocols (HTTPS, TLS)

### Dependency Management
- Keep dependencies up-to-date
- Review security advisories for dependencies
- Minimize the number of external dependencies
- Prefer well-maintained and widely-used libraries

## Error Handling

### Robust Error Handling
- Implement comprehensive error handling
- Provide meaningful error messages
- Log errors appropriately for debugging
- Fail gracefully and provide recovery options when possible
- Don't expose sensitive information in error messages

## Performance Considerations

### Efficiency
- Write efficient algorithms and data structures
- Avoid premature optimization, but be mindful of performance
- Consider scalability in design decisions
- Profile and benchmark critical code paths

## Version Control and Git

### Commit Practices
- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Reference issue numbers when applicable
- Follow conventional commit format when established

### Branch Management
- Keep branches focused on specific features or fixes
- Regularly sync with the main branch
- Clean up branches after merging

## Framework-Specific Guidelines

### API Design
- Design intuitive and consistent APIs
- Provide clear abstractions for common patterns
- Ensure backward compatibility when possible
- Version APIs appropriately

### Extensibility
- Design for extensibility and customization
- Provide clear extension points
- Document how to extend the framework
- Maintain stable interfaces

### Examples and Samples
- Provide clear examples for common use cases
- Include sample applications demonstrating framework features
- Keep examples simple and focused

## Code Review Expectations

### Before Submitting
- Ensure all tests pass
- Run linters and formatters
- Update documentation as needed
- Verify no security vulnerabilities are introduced
- Check that changes are minimal and focused

### Review Criteria
- Code follows project conventions
- Tests adequately cover new functionality
- Documentation is clear and complete
- No unnecessary complexity is introduced
- Performance implications are considered

## Continuous Improvement

### Learning and Adaptation
- Stay updated with best practices
- Learn from code review feedback
- Continuously improve code quality
- Refactor when necessary to reduce technical debt

## Special Notes

- Since this is a foundational framework, prioritize stability and reliability over rapid feature addition
- Consider the impact of changes on downstream users of the framework
- Maintain high standards for code quality as this code will serve as a foundation for other applications
- When in doubt, favor explicit over implicit, clear over clever
