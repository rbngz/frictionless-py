/*
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  introduction: ["introduction/introduction", "introduction/whats-next"],
  guides: [
    "guides/guides-overview",
    "guides/getting-started",
    "guides/introduction-guide",
    "guides/describing-data",
    "guides/extracting-data",
    "guides/validating-data",
    "guides/transforming-data",
    {
      "Working in Python": [
        "guides/package-guide",
        "guides/resource-guide",
        "guides/schema-guide",
        "guides/layout-guide",
        "guides/inquiry-guide",
        "guides/report-guide",
        "guides/pipeline-guide",
        "guides/status-guide",
      ],
      "Advanced topics": ["guides/extension-guide"],
    },
  ],
  tutorials: [
    "tutorials/tutorials-overview",
    {
      "Schemes Tutorials": [
        "tutorials/buffer-tutorial",
        "tutorials/local-tutorial",
        "tutorials/multipart-tutorial",
        "tutorials/remote-tutorial",
        "tutorials/s3-tutorial",
        "tutorials/stream-tutorial",
      ],
      "Formats Tutorials": [
        "tutorials/bigquery-tutorial",
        "tutorials/ckan-tutorial",
        "tutorials/csv-tutorial",
        "tutorials/excel-tutorial",
        "tutorials/gsheets-tutorial",
        "tutorials/html-tutorial",
        "tutorials/inline-tutorial",
        "tutorials/json-tutorial",
        "tutorials/ods-tutorial",
        "tutorials/pandas-tutorial",
        "tutorials/spss-tutorial",
        "tutorials/sql-tutorial",
      ],
    },
    "tutorials/server-tutorial",
  ],
  references: [
    "references/references-overview",
    "references/schemes-reference",
    "references/formats-reference",
    "references/plugins-reference",
    "references/errors-reference",
    "references/api-reference",
  ],
  development: [
    "development/development",
    "development/contributing",
    "development/changelog",
    "development/migration",
    "development/authors",
  ],
};