#!/usr/bin/env node

/**
 * Screenshot Helper Script
 * Helps manage and validate screenshots for Office 365 training lessons
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SCREENSHOT_DIR = 'public/images/screenshots';
const LESSONS_DIR = 'src/content/lessons';

// Color codes for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

// Check if screenshot directories exist
function checkScreenshotDirectories() {
  logInfo('Checking screenshot directories...');
  
  const apps = ['word', 'excel', 'outlook'];
  const lessons = {
    word: ['intro', 'formatting', 'advanced', 'bonus'],
    excel: ['intro', 'formulas', 'charts', 'bonus'],
    outlook: ['intro', 'calendar', 'organization', 'bonus']
  };

  let missingDirs = [];

  apps.forEach(app => {
    lessons[app].forEach(lesson => {
      const dirPath = path.join(SCREENSHOT_DIR, app, lesson);
      if (!fs.existsSync(dirPath)) {
        missingDirs.push(dirPath);
        fs.mkdirSync(dirPath, { recursive: true });
        logSuccess(`Created directory: ${dirPath}`);
      }
    });
  });

  if (missingDirs.length === 0) {
    logSuccess('All screenshot directories exist!');
  }
}

// Find unused screenshots
function findUnusedScreenshots() {
  logInfo('Finding unused screenshots...');
  
  const screenshots = [];
  
  function scanDirectory(dir) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          scanDirectory(filePath);
        } else if (file.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
          screenshots.push(filePath);
        }
      });
    }
  }

  scanDirectory(SCREENSHOT_DIR);

  // Check if screenshots are referenced in markdown files
  const markdownFiles = [];
  function scanMarkdown(dir) {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          scanMarkdown(filePath);
        } else if (file.endsWith('.md')) {
          markdownFiles.push(filePath);
        }
      });
    }
  }

  scanMarkdown(LESSONS_DIR);

  const unusedScreenshots = [];
  screenshots.forEach(screenshot => {
    const filename = path.basename(screenshot);
    let isUsed = false;
    
    markdownFiles.forEach(mdFile => {
      const content = fs.readFileSync(mdFile, 'utf8');
      if (content.includes(filename)) {
        isUsed = true;
      }
    });
    
    if (!isUsed) {
      unusedScreenshots.push(screenshot);
    }
  });

  if (unusedScreenshots.length > 0) {
    logWarning(`Found ${unusedScreenshots.length} unused screenshots:`);
    unusedScreenshots.forEach(screenshot => {
      logWarning(`  - ${screenshot}`);
    });
  } else {
    logSuccess('All screenshots are being used!');
  }
}

// Generate screenshot template for a lesson
function generateScreenshotTemplate(app, lesson) {
  logInfo(`Generating screenshot template for ${app}/${lesson}...`);
  
  const template = `# 📸 Screenshots for ${app.toUpperCase()} - ${lesson.charAt(0).toUpperCase() + lesson.slice(1)}

## Required Screenshots

### 1. Interface Overview
- **File**: \`${app}-${lesson}-interface.png\`
- **Description**: Main interface showing key elements
- **Notes**: Capture the main window with relevant tools visible

### 2. Feature Demonstration
- **File**: \`${app}-${lesson}-feature.png\`
- **Description**: Specific feature being taught
- **Notes**: Focus on the relevant dialog or tool

### 3. Step-by-Step Process
- **File**: \`${app}-${lesson}-step1.png\`
- **Description**: First step in the process
- **Notes**: Clear and focused on the action

- **File**: \`${app}-${lesson}-step2.png\`
- **Description**: Second step in the process
- **Notes**: Show progression from step 1

### 4. Final Result
- **File**: \`${app}-${lesson}-result.png\`
- **Description**: Completed task or final state
- **Notes**: Show the successful outcome

## Markdown Integration

\`\`\`markdown
![${app.charAt(0).toUpperCase() + app.slice(1)} Interface](https://your-domain.com/images/screenshots/${app}/${lesson}/${app}-${lesson}-interface.png)
*Figure 1: Main interface of Microsoft ${app.charAt(0).toUpperCase() + app.slice(1)}*

![${app.charAt(0).toUpperCase() + app.slice(1)} Feature](https://your-domain.com/images/screenshots/${app}/${lesson}/${app}-${lesson}-feature.png)
*Figure 2: ${lesson.charAt(0).toUpperCase() + lesson.slice(1)} feature demonstration*
\`\`\`

## Checklist

- [ ] Take all required screenshots
- [ ] Optimize file sizes (under 500KB)
- [ ] Use consistent naming convention
- [ ] Test in markdown preview
- [ ] Verify responsive behavior
- [ ] Add alt text for accessibility
`;

  const templatePath = path.join(SCREENSHOT_DIR, app, lesson, 'README.md');
  fs.writeFileSync(templatePath, template);
  logSuccess(`Template created: ${templatePath}`);
}

// Main function
function main() {
  const command = process.argv[2];
  const app = process.argv[3];
  const lesson = process.argv[4];

  switch (command) {
    case 'check':
      checkScreenshotDirectories();
      findUnusedScreenshots();
      break;
    
    case 'template':
      if (!app || !lesson) {
        logError('Usage: node screenshot-helper.js template <app> <lesson>');
        logError('Example: node screenshot-helper.js template word formatting');
        process.exit(1);
      }
      generateScreenshotTemplate(app, lesson);
      break;
    
    case 'help':
    default:
      logInfo('Screenshot Helper Script');
      logInfo('');
      logInfo('Commands:');
      logInfo('  check                    - Check directories and find unused screenshots');
      logInfo('  template <app> <lesson>  - Generate screenshot template for a lesson');
      logInfo('  help                     - Show this help message');
      logInfo('');
      logInfo('Examples:');
      logInfo('  node screenshot-helper.js check');
      logInfo('  node screenshot-helper.js template word formatting');
      logInfo('  node screenshot-helper.js template excel formulas');
      break;
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  checkScreenshotDirectories,
  findUnusedScreenshots,
  generateScreenshotTemplate
}; 