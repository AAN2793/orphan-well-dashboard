# Ohio Orphan Well Bid Analysis - Carbon Cut Solutions

## Goal
Build competitive advantage in the billion-dollar orphan well plugging industry by analyzing winning bids and what makes companies win.

## Detailed CSV Structure

### Contract Fields
| Field | Description | Data Source |
|-------|-------------|--------------|
| Contract_ID | Unique identifier | OH-YYYY-### |
| Project_Name | Name of project | Ohio DNR website |
| County | Ohio county | Ohio DNR |
| State | OH | Fixed |
| Wells_Count | Number of wells in contract | Contract details |
| Total_Bid_Amount | Winning bid in USD | News/contracts |
| Per_Well_Cost | Calculated cost per well | Total/Wells |
| Year | Year awarded | Required |
| Company | Awarded contractor | News/public records |
| Winning_Bid_Rank | 1 = winning | Competition |
| Competition_Count | Number of bidders | Contract docs |
| Well_Depth_Avg_ft | Average depth in feet | Scope of Work |
| Well_Depth_Max_ft | Maximum depth | Scope of Work |
| Well_Type | Oil/Gas/Mixed | Well records |
| Pressure_PSI | Well pressure | Scope of Work |
| Contamination_Level | Low/Moderate/High | Site assessment |
| Methane_Detected | Yes/No | Environmental docs |
| Water_Table_Distance_ft | Distance to water table | Environmental |
| Access_Difficulty | Easy/Moderate/Difficult | Site conditions |
| Terrain_Type | Flat/Hilly/Wooded | Location |
| Plugging_Method | Conventional/Alternative | Scope |
| Cement_Required_bbls | Barrels of cement | Scope |
| Completion_Days | Days to complete | Contract |
| Contractor_Experience_Rating | 1-5 scale | Public records |
| Notes | Additional details | Various |
| Source | Where data found | Reference |

## Key Insights Found

### Pricing Benchmarks
- **Average cost per well:** $84K - $131K (varies by depth/complexity)
- **Deep wells (3500ft+):** $420K+ per well
- **Shallow wells:** $80K-$100K per well
- **Multi-well contracts:** Better economies of scale (~84K/well)

### Winning Factors Identified
1. **Competitive pricing** - Low bid typically wins
2. **Well control capability** - Ability to handle pressure/methane
3. **Equipment readiness** - Cementing, well control fluids
4. **Experience** - Track record with similar projects
5. **Depth capability** - Deeper = more specialized

### Risk Factors That Increase Cost
- High pressure wells
- Methane detected
- Close water table (<500ft)
- Difficult access (hilly/wooded)
- Historical contamination

## Data Sources
- Ohio DNR Closed Contracts page
- Ohio ODNR Annual Reports
- News releases (Marietta Times, GlobeNewswire)
- Zefiro Methane investor relations
- Scope of Work PDFs

## Next Steps
1. Get browser working to scrape 96 contracts
2. Add Carbon Cut's bid history (wins AND losses)
3. Analyze winning bid patterns
4. Identify optimal bid ranges by well type
5. Build predictive model for bid positioning
