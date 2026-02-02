
# KUCCPS Course Checker Enhancement Plan

## Summary
This plan addresses several enhancements to make the course qualification checker more complete and aligned with KUCCPS standards:

1. **Add Category Selection for Non-Degree Levels** - Allow Diploma, Certificate, and Artisan courses to filter by category (similar to how Degree uses clusters)
2. **Add Minimum Mean Grade Input** - Users enter their overall KCSE mean grade for non-degree qualification checks
3. **Display Institutions in Results** - Show institution names for all course levels (not just degrees)
4. **Exclude KMTC from Category Selection** - KMTC courses remain without filtering

---

## What Will Change

### 1. New Mean Grade Input Component
A new input section where users enter their KCSE Mean Grade (A to E). This is separate from individual subject grades and is used for non-degree courses that have minimum mean grade requirements.

- Appears after entering KCSE grades
- Simple dropdown selector (A, A-, B+, B, B-, C+, C, C-, D+, D, D-, E)
- Required for Diploma, Certificate, Artisan, and KMTC levels

### 2. Category Selection for Diploma, Certificate & Artisan
Similar to the cluster selection for degrees, users can:
- Select specific categories to filter courses
- Or choose "Check All Categories"
- Each level has its own set of categories based on KUCCPS data

**Diploma Categories (24 total):**
Law, Education & Related, Business & Related, Building/Construction, Engineering/Technology, Environmental Sciences, Applied Sciences, Health Sciences, Food Science, Nutrition & Dietetics, Social Sciences, Computing/IT, Clothing/Fashion/Textile, Agricultural Sciences, Natural Sciences, Tax & Custom Administration, Graphics/Media, Hospitality/Tourism, Technical Courses, Animal Health, Hair Dressing/Beauty, Library & Information Science, Primary Teacher Education, Music

**Certificate Categories (22 total):**
Business, Building/Construction, Engineering Technology, Health Sciences, Food Science, Nutrition & Dietetics, Social Sciences, Environmental Sciences, Applied Sciences, IT, Hospitality/Tourism, Clothing/Fashion/Textile, Agricultural Sciences, Natural Sciences, Graphics/Media, Technical Courses, Tax & Custom, Hair Dressing/Beauty, Library & Information Sciences, Law, Education, Animal Health

**Artisan Categories (14 total):**
Business, Building/Construction, Engineering/Technology, Food Science, Social Sciences, Applied Sciences, IT, Hospitality/Tourism, Clothing/Fashion/Textile, Agricultural Sciences, Natural Sciences, Technical Courses, Hair Dressing/Beauty, Library & Information Sciences

### 3. Enhanced Results Display
- Show institution names for ALL course levels (currently only shown for degrees)
- Display the course category for non-degree courses
- For degrees: continue showing cutoff points and cluster weights
- For non-degree: show minimum mean grade requirement and user's mean grade

### 4. Updated Course Data Structure
Add `minimumMeanGrade` field to Course interface for non-degree courses

---

## Technical Details

### Files to Modify

```text
src/lib/courseData.ts
├── Update Course interface: add minimumMeanGrade field
├── Update diploma/certificate/artisan courses with proper data
└── Add getCoursesByCategory function

src/components/ClusterSelection.tsx  
└── Rename/refactor to CategorySelection.tsx to handle both clusters AND categories

src/components/GradeInput.tsx (or new MeanGradeInput.tsx)
└── Add mean grade selector

src/pages/Index.tsx
├── Add meanGrade state
├── Add selectedCategories state for non-degree levels
└── Pass new props to child components

src/components/PaymentSection.tsx
└── Update validation for category selection

src/components/ResultsDisplay.tsx
├── Show institutions for all levels
├── Display category for non-degree courses
└── Show mean grade comparison for non-degree courses
```

### Data Flow

```text
User Flow:
1. Enter KCSE Subject Grades
2. Enter Mean Grade (new)
3. Select Course Level
4. If Degree → Select Clusters → Enter Cluster Weights
5. If Diploma/Certificate/Artisan → Select Categories (new)
6. If KMTC → No category selection needed
7. Pay & Check Results
8. View Results with Institution Details
```

### Qualification Logic Updates

For **Degree courses**: Keep existing cluster weight comparison

For **Diploma/Certificate/Artisan/KMTC**:
- Check if user's mean grade meets minimum requirement
- Check individual subject requirements
- Show institution names in results

---

## Implementation Order

1. **Update Course Interface** - Add minimumMeanGrade field
2. **Create Mean Grade Input** - New component for selecting mean grade
3. **Refactor Category Selection** - Make ClusterSelection work for categories too
4. **Update Index Page** - Add new state and integrate components
5. **Update Payment Validation** - Check for category selection
6. **Update Results Display** - Show institutions and category for all levels
7. **Update Course Data** - Add mean grades to existing courses

---

## Example Course Entry (Updated)

```typescript
// Diploma course with all fields
{
  name: "Diploma in Business Management",
  code: "DIP001",
  universities: ["Kenya Polytechnic", "Mombasa Polytechnic"],
  minimumMeanGrade: "C-",
  previousYearCutoff: 0,
  bestCluster: 0,
  clusters: [],
  subjectRequirements: { english: "C-", mathematics: "C-" },
  level: "Diploma",
  category: "Business & Related"
}
```

This plan ensures parity between degree and non-degree course checking while maintaining the unique requirements for each level (cluster weights for degrees, mean grades for others).
